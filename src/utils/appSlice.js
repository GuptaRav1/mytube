import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		theme: "light",
		language: "en",
		menu: true,
	},
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		setLanguage: (state, action) => {
			state.language = action.payload;
		},
		toggleMenu: (state) => {
			state.menu = !state.menu;
		},
	},
});

export const { toggleTheme, setLanguage, toggleMenu } = appSlice.actions;

export default appSlice.reducer;
