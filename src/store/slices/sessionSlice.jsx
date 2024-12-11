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
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/session/session_view`, data, { withCredentials: true });
		/* console.log(res); */
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

const sessionInsert = createAsyncThunk("session/add", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/session/session_add`, data, { withCredentials: true });
		/* console.log(res); */
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

const sessionUpdate = createAsyncThunk("session/update", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/session/session_update`, data, { withCredentials: true });
		/* console.log(res); */
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

const sessionDelete = createAsyncThunk("session/delete", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/session/session_view`, data, { withCredentials: true });
		/* console.log(res); */
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

export { sessionFind, sessionInsert, sessionUpdate, sessionDelete };
export default sessionSlice.reducer;