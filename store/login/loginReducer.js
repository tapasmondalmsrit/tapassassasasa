import { Types } from "./";

// type constants
const { LOGIN_IN_FAILED, LOGIN_IN_INPROGRESS, LOGIN_IN_SUCCESSFULLY } = Types;

const initialState = {
  loginProgress: false,
  loginFailed: false,
  loginSuccessful: false,
  message: ""
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN_INPROGRESS:
      return {
        ...state,
        loginProgress: true,
        loginSuccessful: false
      };
    case LOGIN_IN_SUCCESSFULLY:
      return {
        ...state,
        loginProgress: false,
        message: action.payload,
        loginSuccessful: true
      };
    case LOGIN_IN_FAILED:
      return {
        ...state,
        loginProgress: false,
        message: action.payload,
        loginFailed: false
      };
    default:
      return state;
  }
};

export default LoginReducer;
