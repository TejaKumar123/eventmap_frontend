import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const sessionSlice = createSlice({
	name: "session",
	initialState: {

	},
	reducers: {

	}
});

const sessionFind = createAsyncThunk("session/find", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/findUser`, data, { withCredentials: true });
		console.log(res);
		if (res?.data?.status == "ok") {
			return thunkApi.fulfillWithValue(res?.data);
		}
		else {
			return thunkApi.rejectWithValue(res?.data);
		}

	}
	catch (er) {
		return thunkApi.rejectWithValue({
			status: "error",
			error: er,
			message: "error while finding sessions"
		})
	}
})

export { sessionFind };
export default sessionSlice.reducer;