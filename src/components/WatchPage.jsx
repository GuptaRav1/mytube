import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	});

	return (
		<div className="p-4">
			<iframe
				width="880"
				height="495"
				src={
					"https://www.youtube.com/embed/" +
					searchParams.get("v") +
					"?autoplay=1"
				}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
		</div>
	);
};

export default WatchPage;
