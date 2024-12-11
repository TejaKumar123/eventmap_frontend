import { combineReducers } from "redux";
import authSliceReducer from "./slices/authSlice";
import userSliceReducer from "./slices/userSlice";
import otherSliceReducer from "./slices/otherSlice";
import sessionReducer from "./slices/sessionSlice";
import registrationReducer from "./slices/registrationSlice";
import feedbackReducer from "./slices/feedbackSlice";

const rootReducer = combineReducers({
	auth: authSliceReducer,
	user: userSliceReducer,
	other: otherSliceReducer,
	session: sessionReducer,
	registration: registrationReducer,
	feedback: feedbackReducer,
});

export default rootReducer;