//import {useState, useEffect,useRef} from 'react'
//import Pagination from './components/Pagination'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  PaginationDec,
  PaginationInc,
  PaginationParticularPage,
} from "../redux/actions/creators";
const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, postsPerPage, totalPages, paginate } = useSelector(
    (state) => state.paginationReducer
  );

  const paginateArray = new Array(10).fill(0);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="mx-2 bg-blog text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(PaginationDec())}
        >
          Prev Page
        </button>

        <div>
          {paginateArray.map((_, index) => (
            <button
              key={uuidv4()}
              className={`mx-2 font-bold py-2 px-4 rounded ${
                currentPage === index + 1 ? "text-white bg-blog " : "text-blog"
              }`}
              onClick={() => dispatch(PaginationParticularPage(index + 1))}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="mx-2 bg-blog text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(PaginationInc())}
          >
            Next Page
          </button>
          <button className="mx-2 bg-blog text-white font-bold py-2 px-4 rounded">
            CurrentPage: {currentPage}
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Pagination);
