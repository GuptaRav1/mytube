import React from "react";

const VideoCard = ({ videoInfo }) => {
	const { snippet, statistics } = videoInfo;
	const { title, channelTitle, thumbnails } = snippet;
	const { viewCount, likeCount, dislikeCount, commentCount } = statistics;
	const truncatedTitle =
		title.length > 60 ? title.substring(0, 57) + "..." : title;
	return (
		<div className="cursor-pointer w-72 bg-gray-200 p-2 rounded-md m-1">
			<img className="rounded-md" src={thumbnails.medium.url} alt={title} />
			<h3 className="font-bold my-1">{truncatedTitle}</h3>
			<p>{channelTitle}</p>
			<p>{viewCount} views</p>
		</div>
	);
};

export default VideoCard;
