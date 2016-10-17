(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	var displayC = false;
	
	weatherService.getWeather(function(weather){
		displayWeather(weather);
	})
	
	function displayWeather(weatherObj){
		var template = ``;
		var weatherElem = $('#weather')
		var iconUrl = weatherService.getWeatherIcon(weatherObj.weather[0].icon);
		var tempF = weatherService.kelvinToFahrenheit(weatherObj.main.temp)
		var tempC = weatherService.kelvinToCelsius(weatherObj.main.temp)
		var temp;
		if(displayC){
		 	temp = Math.round(tempC);
		}else{
			temp = Math.round(tempF);
		}

		template += 
		`
		<img src="${iconUrl}">
		${temp}&#176;
		<p class="scooted-up">${weatherObj.name}</p>
		`

		weatherElem.html(template);
	}
	
	
	
	
}())
