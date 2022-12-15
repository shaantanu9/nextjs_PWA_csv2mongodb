import {
  PAGINATION_DEC,
  PAGINATION_INC,
  PAGINATION_PARTICULAR_PAGE,
} from "../types";

// export const PaginationFunc = (payload) => {
//   return {
//     type: PAGINATION,
//     payload,
//   };
// };

export const PaginationInc = () => {
  return {
    type: PAGINATION_INC,
  };
};

export const PaginationDec = () => {
  return {
    type: PAGINATION_DEC,
  };
};

export const PaginationParticularPage = (payload) => {
  return {
    type: PAGINATION_PARTICULAR_PAGE,
    payload,
  };
};
