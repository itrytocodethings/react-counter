//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Main } from "./component/main";

//render your react application
let seconds = 0;
let isStopped = false;
let customSeconds;

let countID = setInterval(() => {
	if (!isStopped && !(seconds < 0)) {
		ReactDOM.render(
			<Main
				seconds={seconds}
				stopCount={stopCount}
				startCount={startCount}
				setCount={setCount}
			/>,
			document.querySelector("#app")
		);
		customSeconds && !isStopped ? seconds-- : seconds++;
	}
	// else {
	// 	ReactDOM.render(
	// 		<Main
	// 			seconds={seconds}
	// 			stopCount={stopCount}
	// 			startCount={startCount}
	// 		/>,
	// 		document.querySelector("#app")
	// 	);
	// }
}, 1000);

function stopCount() {
	isStopped = true;
	seconds = 0;
}
function startCount() {
	if (isStopped) {
		seconds = customSeconds ? customSeconds : seconds;
		console.log(seconds);
		isStopped = false;
	}
}
function setCount(e) {
	if (e.keyCode == 13) {
		stopCount();
		customSeconds = parseInt(
			document.querySelector("#customSeconds").value
		);
		document.querySelector("#customSeconds").value = "";
		console.log(customSeconds);
		startCount();
	}
}
