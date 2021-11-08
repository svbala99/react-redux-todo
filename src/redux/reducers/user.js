import ActionTypes from "../types";

const { FETCH_USER_SUCCESS } = ActionTypes.userTypes;

const initialState = {
  usersArray: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        usersArray: action.users,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
