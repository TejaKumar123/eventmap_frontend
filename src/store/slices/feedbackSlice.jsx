import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const feedbackSlice = createSlice({
	name: "feedback",
	initialState: {

	},
	reducers: {

	}
});

const feedbackAdd = createAsyncThunk("feedback/add", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/feedback_add`, data, { withCredentials: true });
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
			message: "feedback is not added",
		})
	}
})

const feedbackUpdate = createAsyncThunk("feedback/update", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/feedback_update`, data, { withCredentials: true });
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
			message: "feedback is not added",
		})
	}
})

const feedbackView = createAsyncThunk("feedback/view", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/feedback_view`, data, { withCredentials: true });
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
			message: "feedback is not added",
		})
	}
})

const feedbackDelete = createAsyncThunk("feedback/delete", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/feedback_delete`, data, { withCredentials: true });
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
			message: "feedback is not added",
		})
	}
})

export { feedbackAdd, feedbackUpdate, feedbackView, feedbackDelete };
export default feedbackSlice.reducer;