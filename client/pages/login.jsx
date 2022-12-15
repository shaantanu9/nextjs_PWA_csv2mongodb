//import {useState, useEffect,useRef} from 'react'
import React from "react";
import Login from "../components/Login";
//import Login from './components/Login'
const LoginPage = (props) => {
  return (
    <>
      <Login />
    </>
  );
};

export default React.memo(LoginPage);
