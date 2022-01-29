//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Main } from "./component/main";

//render your react application
window.onload = () => {
	let seconds = 0;
	let windowCounter = setInterval(() => {
		seconds++;
		console.log(seconds);
		ReactDOM.render(
			<Main seconds={seconds} />,
			document.querySelector("#app")
		);
	}, 1000);
};
