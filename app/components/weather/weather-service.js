function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?lat=replacelat&lon=replacelon&&APPID=bd82255fd0a21fa1238699b9eda2ee35';
	var apiUrl = url + encodeURIComponent(url2);
	var apiWeatherIconUrl = 'https://openweathermap.org/img/w/'

	this.getWeather = function (callWhenDone) {

		navigator.geolocation.getCurrentPosition(function(geo){
			var locationURL = apiUrl.replace("replacelon", geo.coords.longitude);
			locationURL = locationURL.replace("replacelat", geo.coords.latitude);
			$.get(locationURL, function (res) {
				var obj = JSON.parse(res)
				callWhenDone(obj);
			})
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
