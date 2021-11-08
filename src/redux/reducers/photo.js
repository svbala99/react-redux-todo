import ActionTypes from "../types";

const { FETCH_PHOTOS_SUCCESS } = ActionTypes.photoTypes;

const initialState = {
  photosArray: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        photosArray: action.photos,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default photoReducer;
