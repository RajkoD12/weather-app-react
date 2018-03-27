import React from "react";

import InputField from "./InputField";

class App extends React.Component {
	constructor() {
		super();

		this.getWeather = this.getWeather.bind(this);

		this.state = {
			weather: {},
			showButton: false
		}
	}

	getWeather(city) {
		if(this.state.weather) {
			this.setState({showButton: true});
		} else {
			this.setState({showButton: false});
		}
		
		const url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
		const apiKey = "appid=192bd17540c63ad9856465e8d077b2b8";

		fetch(url + city + "&" + apiKey).then(results => {
			return results.json();
		}).then(data => {
			// console.log("data: " + JSON.stringify(data));
			const newData = {...this.state.weather};
			newData[`${data.name}`] = data;
			this.setState({weather: newData});
			console.log(this.state.weather);
		});
	}

	render() {
		return (
			<div>
				<InputField showButton={this.state.showButton} getWeather={this.getWeather} />
				<div className="kontejner">
					<div className="wrap">
						<div className="col-sm-4">
							<div className="display-weather">
								<div>
									<div>
										<span className="title">weather</span><br/>
										<span>date | dateFormat</span>
									</div>
									<div>
										<span className="title">temp<sup>°C</sup></span><br/>
										<span>description</span>
									</div>
									<div>
										<img src="http://openweathermap.org/img/w/weather.weather[0].icon.png" alt=""/>
										<br/>
										<span>Humidity: humidity %</span><br/>
										<span>Wind: speed km/h</span>
									</div>
								</div>
								<span className="mapbutton">Map</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
