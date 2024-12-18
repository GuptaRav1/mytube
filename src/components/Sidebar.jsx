import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
	const menu = useSelector((state) => state.app.menu);
	if (!menu) return;
	return (
		<div className="w-48 shadow-lg p-4">
			<ul>
				<li>Home</li>
				<li>Shorts</li>
				<li>Live</li>
				<li>Sports</li>
			</ul>
			<h1 className="font-bold mt-5">Watch Later</h1>
			<ul>
				<li>Liked Videos</li>
				<li>Watch Later</li>
				<li>Playlist 1</li>
				<li>Playlist 2</li>
			</ul>
			<h1 className="font-bold mt-5">Subscriptions</h1>
			<ul>
				<li>Music</li>
				<li>Videos</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
};

export default Sidebar;
