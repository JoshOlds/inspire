(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	var displayC = false;
	var weather;
	weatherService.getWeather(displayWeather)
	
	function displayWeather(weatherObj){
		weather = weatherObj;
		console.log(weather)
		var template = ``;
		var weatherElem = $('#weather')
		var iconUrl = weatherService.getWeatherIcon(weather.weather[0].icon);
		var tempF = weatherService.kelvinToFahrenheit(weather.main.temp)
		var tempC = weatherService.kelvinToCelsius(weather.main.temp)
		var temp;
		var unit = displayC ? "C" : "F";
		if(displayC){
		 	temp = Math.round(tempC);
		}else{
			temp = Math.round(tempF);
		}

		template += 
		`
		<img src="${iconUrl}">
		${temp}&#176${unit}
		<p class="scooted-up">${weather.name}</p>
		`

		weatherElem.html(template);
	}
	
	$('#weather').on('click', function(){
		displayC = !displayC;
		displayWeather(weather);
	})
	
	
}())
