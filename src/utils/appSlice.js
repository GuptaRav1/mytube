import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		theme: "light",
		language: "en",
		menu: true,
	},
	reducers: {
		toggleMenu: (state) => {
			state.menu = !state.menu;
		},
		closeMenu: (state) => {
			state.menu = false;
		},
	},
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
