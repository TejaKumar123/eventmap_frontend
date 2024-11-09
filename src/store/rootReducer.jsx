import { combineReducers } from "redux";
import authSliceReducer from "./slices/authSlice";
import userSliceReducer from "./slices/userSlice";
import otherSliceReducer from "./slices/otherSlice";

const rootReducer = combineReducers({
	auth: authSliceReducer,
	user: userSliceReducer,
	other: otherSliceReducer,
});

export default rootReducer;