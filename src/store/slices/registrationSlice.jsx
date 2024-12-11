import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registrationSlice = createSlice({
	name: "registration",
	initialState: {

	},
	reducers: {

	}

});

const registrationAdd = createAsyncThunk("registration/add", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/registration/registration_add`, data,
			{ withCredentials: true });
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
			error: err,
			message: "erro while registering",
		})
	}
})

const registrationView = createAsyncThunk("registration/add", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/registration/registration_view`, data,
			{ withCredentials: true });
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
			error: err,
			message: "erro while registering",
		})
	}
})

const registrationDelete = createAsyncThunk("registration/add", async (data, thunkApi) => {
	try {
		let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/registration/registration_delete`, data,
			{ withCredentials: true });
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
			error: err,
			message: "erro while registering",
		})
	}
})

export { registrationAdd, registrationView, registrationDelete };
export default registrationSlice.reducer;
