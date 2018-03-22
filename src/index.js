import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";

const Root = () => {
	return (
		<HashRouter>
			<App />
		</HashRouter>
	)
}

render (<Root />, document.getElementById("root"));
