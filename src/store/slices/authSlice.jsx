import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = { login: true, role: "admin" };
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthDet: (state, action) => {
			state.login = action.payload.login;
			state.role = action.payload.role;
		}
	}
})


/* export const fetchStates = createAsyncThunk(
	"auth/fetchStates",
	async (payload, thunkApi) => {
		try {
			return { login: true, role: "admin" };
			return thunkApi.fulfillWithValue((thunkApi.getState()));
		}
		catch (err) {
			return thunkApi.rejectWithValue({
				status: "error",
				message: "error while retrieving the states",
				error: err,
			})
		}
	}
) */

export const { setAuthDet } = authSlice.actions;
export default authSlice.reducer;