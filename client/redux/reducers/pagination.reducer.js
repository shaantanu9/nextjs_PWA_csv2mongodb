// import {} from "../actions/pagination.actions";
import {
  PAGINATION_DEC,
  PAGINATION_INC,
  PAGINATION_PARTICULAR_PAGE,
  PAGINATION_RESET,
} from "../actions/types";
const initialState = {
  currentPage: 1,
  postsPerPage: 10,
  totalPages: 0,
  paginate: 1,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case PAGINATION_INC:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PAGINATION_DEC:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case PAGINATION_PARTICULAR_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case PAGINATION_RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
