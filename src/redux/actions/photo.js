import Axios from "axios";
import { API_BASE_URL, routes } from "../../constants";
import ActionTypes from "../types";

const { FETCH_PHOTOS_SUCCESS } = ActionTypes.photoTypes;
const { PHOTOS } = routes;

export const fetchPhotos = (props = { name: "bala" }) => {
  return (dispatch) => {
    let URL = `${API_BASE_URL}${PHOTOS}`;
    Axios.get(URL)
      .then((res) => {
        dispatch({
          type: FETCH_PHOTOS_SUCCESS,
          photos: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
