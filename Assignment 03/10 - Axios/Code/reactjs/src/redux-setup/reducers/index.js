import { combineReducers } from "redux";
import timeup from "./timeup";
import timedown from "./timedown";

export default combineReducers({
    TimeUp: timeup,
    TimeDown: timedown,
});