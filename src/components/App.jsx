import React from "react";
import Head from "./Head";
import Body from "./Body";
import { Provider } from "react-redux";
import { store } from "../utils/store";
const App = () => {
	return (
		<Provider store={store}>
			<Head />
			<Body />
		</Provider>
	);
};

export default App;
