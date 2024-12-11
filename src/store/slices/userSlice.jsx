import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
	name: "user",
	initialState: {

	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		}
	}
})

const findUser = createAsyncThunk("user/find", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/findUser`, data, { withCredentials: true });
		/* console.log(res); */
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
			message: "error while finding user through thunk"
		})
	}
})

const deleteUser = createAsyncThunk("user/delete", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/deleteUser`, data, { withCredentials: true });
		/* console.log(res); */
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
			message: "error while removing user through thunk"
		})
	}
})

export { findUser, deleteUser };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
