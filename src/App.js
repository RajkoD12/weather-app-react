import React from "react";
import {Route, Switch} from "react-router-dom";

//components
import Header from "./components/Header"

class App extends React.Component {
	render() {
		return (
			<Switch>
				<div>
					<Header />
					<Route></Route>
				</div>
			</Switch>
		)
	}
}

export default App;
