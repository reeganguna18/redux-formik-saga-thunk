import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./action";

function Datalist() {
  const dispatch = useDispatch();

  const listData = useSelector((state) => console.log(state.datas.datas));

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);

  return <div>datalist</div>;
}

export default Datalist;
