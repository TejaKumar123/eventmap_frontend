import { createSlice } from "@reduxjs/toolkit";
const otherSlice = createSlice({
	name: "other",
	initialState: {
		heading: ""
	},
	reducers: {
		setHeading(state, action) {
			state.heading = action.payload;
		}
	}

})

export const { setHeading } = otherSlice.actions;
export default otherSlice.reducer