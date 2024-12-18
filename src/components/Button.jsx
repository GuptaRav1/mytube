import React from "react";

const Button = ({ value }) => {
	return (
		<div>
			<button className="px-3 rounded-lg py-1 m-2 bg-gray-200">
				{value}
			</button>
		</div>
	);
};

export default Button;
