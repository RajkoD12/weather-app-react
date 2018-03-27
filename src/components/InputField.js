import React from "react";

class InputField extends React.Component {
	constructor() {
		super();
		this.getCity = this.getCity.bind(this);
	}

	getCity(event) {
		event.preventDefault();
		const city = this.search.value.split(",").map(function(elem) {
			return elem.trim();
		});
		city.map((city) => this.props.getWeather(city));
	}

	render() {
		var visibilityState = this.props.showButton ? "visible" : "hidden";
		
		return (
			<div className="kontejner">
				<div className="cities-list">
					<div className="weatherholder">
						<form action="" onSubmit={this.getCity}>
							<span style={{visibility: visibilityState}}><span className="glyphicon glyphicon-remove removecity"></span></span>
							<input ref={(input) => this.search = input} placeholder="Enter search terms" autoComplete="off" />
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default InputField;