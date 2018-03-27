import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/stil.css";

import Header from "./components/Header";
import About from "./components/About";
import NotFound from "./components/NotFound";
import App from "./components/App";

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
				{/* na pocetku se postavlja na "weather", definisu se ostale rute sa komponentama */}
					<Redirect from="/" exact to="/weather" />
					<Route path="/weather" component={App}></Route>
					<Route path="/about" component={About}></Route>
				{/* ako promasi adresu tj unese se nesto drugo, ide na "weather" */}
					<Route path="/not-found" exact component={NotFound}></Route>
					<Redirect to="/not-found" />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

render (<Root />, document.getElementById("root"));
