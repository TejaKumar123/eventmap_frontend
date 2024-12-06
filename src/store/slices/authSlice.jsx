import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

const logout = createAsyncThunk(
	"auth/logout",
	async (data, thunkApi) => {
		try {
			let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, data, {
				withCredentials: true,
			});
			/* console.log(res?.data); */
			if (res?.data?.status == "ok") {
				return thunkApi.fulfillWithValue(res?.data);
			}
			else {
				return thunkApi.rejectWithValue(res?.data);
			}
		}
		catch (err) {
			return thunkApi.rejectWithValue({
				status: "error",
				error: err,
				message: "error occured while logout"
			});
		}
	}
)

export const { setAuthDet } = authSlice.actions;
export { logout };
export default authSlice.reducer;