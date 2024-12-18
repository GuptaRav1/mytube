import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const menu = useSelector((state) => state.app.menu);
	if (!menu) return;
	return (
		<div className="w-52 shadow-lg px-4 py-4">
			<ul>
				<Link to={"/"}>
					<li className="bg-gray-200 w-full cursor-pointer p-2 rounded-lg">
						Home
					</li>
				</Link>
				<li className="p-1 cursor-pointer">Shorts</li>
				<li className="p-1 cursor-pointer">Live</li>
				<li className="p-1 cursor-pointer">Sports</li>
			</ul>
			<h1 className="font-bold mt-5">Watch Later</h1>
			<ul>
				<li className="p-1 cursor-pointer">Liked Videos</li>
				<li className="p-1 cursor-pointer">Watch Later</li>
				<li className="p-1 cursor-pointer">Playlist 1</li>
				<li className="p-1 cursor-pointer">Playlist 2</li>
			</ul>
			<h1 className="font-bold mt-5">Subscriptions</h1>
			<ul>
				<li className="p-1 cursor-pointer">Music</li>
				<li className="p-1 cursor-pointer">Videos</li>
				<li className="p-1 cursor-pointer">Gaming</li>
				<li className="p-1 cursor-pointer">Movies</li>
			</ul>
		</div>
	);
};

export default Sidebar;
