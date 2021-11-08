import Axios from "axios";
import { API_BASE_URL, routes } from "../../constants";
import ActionTypes from "../types";

const { FETCH_USER_SUCCESS } = ActionTypes.userTypes;
const { USERS } = routes;

export const fetchUsers = () => {
  return (dispatch) => {
    let URL = `${API_BASE_URL}${USERS}`;
    Axios.get(URL)
      .then((res) => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          users: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
