import { combineReducers } from "redux";

import {profileReducer} from "./profile"

// reducers
// import assesseeReducer from "./AssesseeMaster/assesseeReducer";
// import PartyMasterReducer from "./PartyMaster/PartyMasterReducer";
// import optionSettingsReducer from "./OptionSettings/optionSettingsReducer";
// import { excelErrosReducer, importExcelAction } from './Import/ExcelResponse'


import formReducer from "./FormReducer/Reducers/formReducer";


export default combineReducers({
    excel: formReducer,
    profileReducer
    

});
