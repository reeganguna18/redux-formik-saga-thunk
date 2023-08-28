import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSomeData } from "./Action";

function UserListThunk() {
  const dispatch = useDispatch();
  useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(fetchSomeData())
  }, [dispatch])
  
  return <div>Thunk</div>;
}

export default UserListThunk;
