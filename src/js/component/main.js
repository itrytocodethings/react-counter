import React from "react";

export const Main = ({ seconds, stopCount, startCount, setCount }) => {
	let secondsArr = seconds
		.toString()
		.padStart(6, 0)
		.split("")
		.map((num) => <span className="badge py-5 px-4 m-3">{num}</span>);
	return secondsArr.length > 6 ? null : (
		<div id="wrap" className="wrap p-4">
			<div className="container">
				<div className="counter text-center">
					<span className="badge py-5 px-4 m-3">
						<i className="far fa-clock"></i>
					</span>
					{secondsArr}
					<div className="d-flex justify-content-center w-50 m-auto">
						<button
							className="btn btn-custom d-inline"
							onClick={stopCount}>
							<i className="fas fa-stop-circle"></i>
						</button>
						<button className="btn btn-custom" onClick={startCount}>
							<i class="fas fa-play-circle"></i>
						</button>
						<input
							id="customSeconds"
							className="form-control"
							onKeyUp={setCount}></input>
					</div>
				</div>
			</div>
		</div>
	);
};
