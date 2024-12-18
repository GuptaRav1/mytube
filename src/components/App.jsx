import React from "react";
import Head from "./Head";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "../utils/store";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { RouterProvider } from "react-router";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "watch",
				element: <WatchPage />,
			},
		],
	},
	{},
]);
const App = () => {
	return (
		<Provider store={store}>
			<Head />
			<RouterProvider router={appRouter} />
		</Provider>
	);
};

export default App;
