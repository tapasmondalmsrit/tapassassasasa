import {ANX_INPROGRESS,ANX_SUCCESSFUL,ANX_FAILED} from  "../types";

const initialState = {
    Progress: false,
    Failed: false,
    Successful: false,
    message: ""
  };

  const annexureReducer = (state = initialState, action) => {
    switch (action.type) {
      case ANX_INPROGRESS:
        return {
          ...state,
          Progress: true,
          Successful: false
        };
      case ANX_SUCCESSFUL:
        return {
          ...state,
          Progress: false,
          message: action.payload,
          Successful: true
        };
      case ANX_FAILED:
        return {
          ...state,
          Progress: false,
          message: action.payload,
          Failed: false
        };
      default:
        return state;
    }
  };
  
  export default annexureReducer;