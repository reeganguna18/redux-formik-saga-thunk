import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [showDetails, setShowDetails] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((val) => ({
      ...val,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};
    if (!userDetail.email) {
      validationError.email = "Email is Required";
    }
    if (!userDetail.password) {
      validationError.password = "Password is Required";
    }

    if (
      Object.keys(userDetail).length > 0 &&
      userDetail.email !== "" &&
      userDetail.password !== ""
    ) {
      setShowDetails(userDetail);
      setUserDetail({ email: "", password: "" });
      // setErrors({})
    } else {
      setErrors(validationError);
    }

    console.log(validationError);

    // if (Object.keys(validationError).length > 0) {
    //   setErrors(validationError);
    // } else {
    //   setShowDetails(userDetail);
    // }
  };
  return (
    <div>
      <div className="container-fluid bg-light ">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                *Email
                <br />
                <input
                  type="text"
                  name="email"
                  value={userDetail.email}
                  onChange={handleChange}
                  
                />
                <span style={{ color: "red" }}>{errors.email}</span>
              </label>
              <br />
              <label htmlFor="password">
                *Password
                <br />
                <input
                  type="password"
                  name="password"
                  value={userDetail.password}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.password}</span>
              </label>
              <br />
              <br />
              <button type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>

      {showDetails && (
        <div>
          <h2>Details submitted:</h2>
          <p>Email: {showDetails.email}</p>
          <p>Password: {showDetails.password}</p>
        </div>
      )}
    </div>
  );
}

export default SignIn;
