import {Types} from "./"


const initialState = {
    isLoading: false,
    errormessage: "",
    data: []
}



const ProfileReducer = (state = initialState,action) => {
    switch (action.type) {
        case "PROFILE_INPROGRESS":
            return {
                ...state,
                isLoading: true
            };
        case "PROFILE_SUCCESS": 
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }    
        case "PROFILE_FAILED": 
        return {
            ...state,
            isLoading: false,
            errormessage: ""
        }
        default:
            return state;
    }
}

export default ProfileReducer;