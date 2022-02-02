//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Main } from "./component/main";

//render your react application
let seconds = 0;
let isStopped = true;
let alertOn;

let countID = setInterval(() => {
	if (!isStopped) {
		ReactDOM.render(
			<Main
				seconds={seconds}
				stopCount={stopCount}
				startCount={startCount}
				setAlert={setAlert}
			/>,
			document.querySelector("#app")
		);
		seconds++;
	} else {
		ReactDOM.render(
			<Main
				seconds={seconds}
				stopCount={stopCount}
				startCount={startCount}
				setAlert={setAlert}
			/>,
			document.querySelector("#app")
		);
	}
}, 1000);

function stopCount() {
	seconds = 0;
	isStopped = true;
}

function startCount() {
	if (isStopped) {
		seconds = 0;
		isStopped = false;
	}
}

function setAlert(e) {
	if (e.keyCode == 13) {
		stopCount();
		console.log(e);
		alertOn = parseInt(document.querySelector("#customSeconds").value);
		document.querySelector("#customSeconds").value = "";
		startCount();
	}
}
