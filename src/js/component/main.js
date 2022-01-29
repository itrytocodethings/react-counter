import React from "react";

export const Main = ({ seconds }) => {
	let secondsArr = seconds
		.toString()
		.padStart(6, 0)
		.split("")
		.map((num) => <span className="badge py-5 px-4 m-3">{num}</span>);
	console.log(secondsArr);
	return secondsArr.length > 6 ? null : (
		<div id="wrap" className="wrap p-4">
			<div className="container">
				<div className="counter text-center">
					<span className="badge py-5 px-4 m-3">
						<i className="far fa-clock"></i>
					</span>
					{secondsArr}
				</div>
			</div>
		</div>
	);
};
