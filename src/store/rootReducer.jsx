import { combineReducers } from "redux";
import authSliceReducer from "./slices/authSlice";
import userSliceReducer from "./slices/userSlice";
import otherSliceReducer from "./slices/otherSlice";
import sessionReducer from "./slices/sessionSlice";

const rootReducer = combineReducers({
	auth: authSliceReducer,
	user: userSliceReducer,
	other: otherSliceReducer,
	session: sessionReducer,
});

export default rootReducer;