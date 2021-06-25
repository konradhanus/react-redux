import { combineReducers } from "redux";
import testReducer from "./Components/Test/reducer";

const rootReducer = () => combineReducers({
    test: testReducer,
})

export default rootReducer;