import React from "react";
import {
	HAMBURGER_ICON_URL,
	USER_ICON_URL,
	YOUTUBE_LOGO_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-4 shadow-lg">
			<div className="flex col-span-1 items-center">
				<img
					className="h-6 mr-3 cursor-pointer"
					src={HAMBURGER_ICON_URL}
					alt="menu"
					onClick={() => toggleMenuHandler()}
				/>
				<img className="h-6" src={YOUTUBE_LOGO_URL} alt="logo" />
			</div>
			<div className="col-span-10  text-center">
				<input
					className="w-1/2 border px-4 py-1 border-gray-400 rounded-l-full"
					type="text"
				/>
				<button className="border bg-gray-100 border-gray-400 rounded-r-full px-4 py-1">
					Search
				</button>
			</div>
			<div className="col-span-1 ">
				<img className="h-7" src={USER_ICON_URL} alt="user-icon" />
			</div>
		</div>
	);
};

export default Head;
