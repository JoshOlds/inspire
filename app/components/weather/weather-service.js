function WeatherService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35';
	var apiUrl = url + encodeURIComponent(url2);
	var apiWeatherIconUrl = 'http://openweathermap.org/img/w/'

	this.getWeather = function (callWhenDone) {
		var w = localStorage.getItem('weather');
		if (w) {
			w = JSON.parse(w);
			w = JSON.parse(w);
			if(DebugFlag){console.log(w)}
			return callWhenDone(w)
		}

		$.get(apiUrl, function (res) {
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}

	this.getWeatherIcon = function (iconID){
		return (apiWeatherIconUrl + iconID + '.png')
	}

	this.kelvinToCelsius = function(temp){
		return (temp - 273.15);
	}

	this.kelvinToFahrenheit = function(temp){
		return (temp * (9/5) - 459.67);
	}
}
