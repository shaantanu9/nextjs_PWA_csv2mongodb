//import {useState, useEffect,useRef} from 'react'
import React from "react";
import Register from "../components/Register";
//import Register from './components/Register'
const RegisterPage = (props) => {
  return (
    <>
      <Register />
    </>
  );
};

export default React.memo(Register);
