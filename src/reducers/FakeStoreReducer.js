import axios from "axios";

const initialState = {
  data: [],
  searchTerm: "",
};

export const setSearchTerm = (searchTerm) => {
  return {
    type: "SET_SEARCH_TERM",
    payload: searchTerm,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/api/getAll")
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_PRODUCTS_ERROR",
          payload: error.message,
        });
      });
  };
};
export const addItem = (dataToSave) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/api/post", dataToSave)
      .then((res) => {
        dispatch({ type: "ADD_ITEM", payload: res.item });
      })
      .catch((error) => {
        console.log("Error while adding an item", dataToSave);
      });
  };
};

const fakeStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };

    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default fakeStoreReducer;
