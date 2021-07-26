import changeNumber from "./upDown";
import lightSwitchReducer from "./light";
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    changeNumber: changeNumber,
    lightSwitchReducer: lightSwitchReducer
})

export default rootReducer;