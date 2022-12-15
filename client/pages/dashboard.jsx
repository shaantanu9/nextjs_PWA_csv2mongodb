//import {useState, useEffect,useRef} from 'react'
import { useRouter } from "next/router";
import React from "react";
import instance from "../api/axios";
import { ShowSavedData } from "../components";
//import Dashboard from './components/Dashboard'
const Dashboard = (props) => {
  const [file, setFile] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [showUploadedData, setShowUploadedData] = React.useState(false);
  const router = useRouter();
  //   UseEffect to know token is present or not
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile, "this is selected");
    setFile(selectedFile);
  };

  const upload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    console.log(data, "this is data");

    try {
      //   const res = await instance.post("/leads/create", data);

      // send headers in the request
      const res = await instance.post("/leads/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res, "this is res");
      setLoading(false);
      setSuccessMessage("File uploaded successfully");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error uploading file");
      //   setErrorMessage(error);
      console.log(error, "this is error");
      setLoading(false);
      setSuccessMessage(null);
    }
  };

  return (
    <>
      <div className="container mx-auto p-3">
        <form onSubmit={upload}>
          <input
            type="file"
            onChange={handleChange}
            id="file"
            accept=".csv"
            className=" border:blog hover:bg-blog/10 text-blog font-bold py-2 px-4 rounded"
          />
          <button
            type="submit"
            className="bg-blog/50 hover:bg-blog/75 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
          {loading && <p>Loading...</p>}
          {errorMessage && (
            <p className="bg-red-500 text-white font-bold py-2 px-4 rounded">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              {successMessage}
            </p>
          )}
        </form>
        <button
          onClick={() => setShowUploadedData(!showUploadedData)}
          className="bg-blog hover:bg-blog/75 text-white font-bold py-2 px-4 rounded"
        >
          Show Uploaded Data
        </button>
        {showUploadedData && <ShowSavedData />}
      </div>
    </>
  );
};

export default React.memo(Dashboard);
