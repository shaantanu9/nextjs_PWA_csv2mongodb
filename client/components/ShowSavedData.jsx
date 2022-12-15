//import {useState, useEffect,useRef} from 'react'
import React from "react";
import { useSelector } from "react-redux";
import instance from "../api/axios";
import Pagination from "./Pagination";
//import ShowSavedData from './components/ShowSavedData'
const ShowSavedData = (props) => {
  const [data, setData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { currentPage, paginate, postsPerPage, totalPages } = useSelector(
    (state) => state.paginationReducer
  );

  const getData = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        "/leads" + `?page=${currentPage}&limit=${postsPerPage}`
      );
      setLoading(false);
      setErrorMessage(null);
      setData(res.data.data);
    } catch (error) {
      setErrorMessage("Error uploading file");
      //   setErrorMessage(error);
      console.log(error, "this is error");
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <>
      <div className="container mx-auto p-3">
        {loading && <div>Loading...</div>}
        {errorMessage && <div>{errorMessage}</div>}
        {data &&
          data?.map(({ name, email, phone, linkedin, _id }) => {
            return (
              <div
                key={_id}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
              >
                <div>{name}</div>
                <div className="flex flex-row justify-between">
                  <div>{email}</div>
                  <div>{phone}</div>
                </div>
                <div>{linkedin}</div>
              </div>
            );
          })}
      </div>
      <Pagination />
    </>
  );
};

export default React.memo(ShowSavedData);
