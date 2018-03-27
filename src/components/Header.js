import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<ul>
				<li>WEATHER APP</li>
			</ul>
			<ul>
				<li>
					<Link to="/weather">Current weather</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Header;
