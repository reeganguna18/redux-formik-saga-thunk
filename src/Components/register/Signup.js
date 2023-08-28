import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import "./Signup.css";
import axios from "axios";
import api from "../Api/api";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName > 15) {
    errors.firstName = "must be 15 char or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName > 15) {
    errors.lastName = "must be 15 char or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

function Signup() {
  const [userList, setUserList] = useState([]);
  const user = {
    username: "reegan",
    email: "reegan@gmail.com"
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const newUser = { ...values };

      setUserList((prev) => {
        console.log("what is this", prev);
        const updatedUserList = [...prev, newUser];
        sessionStorage.setItem("users", JSON.stringify(updatedUserList));
        return updatedUserList;
      });
      
      try {
        const response = api.post('/register', {user});
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }

      resetForm();
    },
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem("users");
    if (storedData) {
      setUserList(JSON.parse(storedData));
    }
//    try {
//     api?.get('https://localhost:3500/register').then(resp=>{
//         console.log(resp?.data);
//     })
//    } catch (error) {
//     console.log(error);
//    }
    console.log("check api", userList);
  }, []);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form-element">
        <label>*First Name</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="input-form"
        />
        {formik.errors.firstName ? (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        ) : null}
        <label>*Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="input-form"
        />
        {formik.errors.lastName ? (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        ) : null}
        <label>*Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="input-form"
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <button type="submit" className="input-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
