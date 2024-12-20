import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		try {
			const response = await fetch(YOUTUBE_VIDEOS_API);
			const data = await response.json();
			setVideos(data.items);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-2 flex flex-wrap">
			{videos.map((video) => (
				<Link to={"/watch?v=" + video.id} key={video.id}>
					<VideoCard videoInfo={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
