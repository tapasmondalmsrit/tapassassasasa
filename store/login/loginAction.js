import { Http, APIDirectory } from "../../rest_api";
import { Types } from "./";

// router base url
import { routerBaseURL } from "../../App";

// type constants
const { LOGIN_IN_FAILED, LOGIN_IN_INPROGRESS, LOGIN_IN_SUCCESSFULLY } = Types;

//localStorage
import { SetLocalStorageItem } from "../LocalStorage";

const LoginRequest = () => ({
  type: LOGIN_IN_INPROGRESS
});

const LoginSuccess = message => ({
  type: LOGIN_IN_SUCCESSFULLY,
  payload: message
});

const LoginFailed = errMessage => ({
  type: LOGIN_IN_FAILED,
  payload: errMessage
});

export const LoginAction = params => {
  const loggedInUser = [];
  console.log("params", params);
  return dispatch => {
    dispatch(LoginRequest());
    // login api call
    try {
      const url = APIDirectory.login();
      const res = Http.post(url, params);
      res
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            const Token = res.data;
            const setToken = SetLocalStorageItem("token", Token);
            // filtering the new email is exist or not
            const notAvailabel =
              loggedInUser.length > 0
                ? loggedInUser.filter(
                    user =>
                      params.email.toUpperCase() === user.email.toUpperCase()
                  )
                : [];
            // check to add in local storage
            if (notAvailabel.length === 0) {
              loggedInUser.unshift({
                name: params.email.substr(0, params.email.indexOf("@")),
                email: params.email
              });
              SetLocalStorageItem(
                "loggedInUsers",
                JSON.stringify(loggedInUser)
              );
            }
            setToken.then(() => {
              dispatch(LoginSuccess("logged in"));
              window.location.href = `${routerBaseURL}/dashboard`;
            });
          }
        })
        .catch(err => {
          dispatch(LoginFailed(err.response.data.errorList));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
