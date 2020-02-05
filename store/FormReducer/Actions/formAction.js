import  AnnexureApi  from "../annexureApi";
import {ANX_INPROGRESS,ANX_SUCCESSFUL,ANX_FAILED} from  "../types";

const ANXRequest = () => ({
  type: ANX_INPROGRESS
});

const ANXSuccess = message => ({
  type: ANX_SUCCESSFUL,
  payload: message
});

const ANXFailed = errMessage => ({
  type: ANX_FAILED,
  payload: errMessage
});

//Add Annexure 
export const Add = params => {
  return dispatch => {
    try {
      const res = AnnexureApi.create(params);
      res
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            dispatch(ANXRequest("saved"));
            console.log("success");
          }
        })
        .catch(err => {
          console.log(err.response);
          dispatch(ANXFailed(err.response));
        });
    } catch (error) {
      console.log(error.response);
    }
  };
};
// // Remove_Annexure
export const Delete = params => {
  return dispatch => {
    try {
      const res = AnnexureApi.delete(params);
      res
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            dispatch(ANXSuccess("saved"));
            console.log("sucess");
          }
        })
        .catch(err => {
          console.log(err.response);
          dispatch(ANXFailed(err.response));
        });
    } catch (error) {
      console.log(error.response);
    }
  };
};

// // EDIT_Annexure
export const Update = params => {
  return dispatch => {
    try {
      const res = AnnexureApi.update(params);
      res
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            dispatch(ANXSuccess("saved"));
            console.log("sucess");
          }
        })
        .catch(err => {
          console.log(err.response);
          dispatch(ANXFailed(err.response));
        });
    } catch (error) {
      console.log(error.response);
    }
  };
};

