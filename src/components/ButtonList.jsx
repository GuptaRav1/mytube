import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Live",
	"Comedy",
	"Music",
	"Talks",
	"Sports",
	"Arts",
	"Food",
	"Fashion",
	"Fitness",
	"Travel",
	"Online",
	"Offline",
];
const ButtonList = () => {
	return (
		<div className="flex mt-2">
			{list.map((item, index) => {
				return <Button key={index} value={item} />;
			})}
		</div>
	);
};

export default ButtonList;
