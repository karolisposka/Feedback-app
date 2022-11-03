import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { suggestionsRecieved } from "../../store/slices/suggestionsSlice";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(suggestionsRecieved());
  }, []);

  return <div>Layout</div>;
};

export default Layout;
