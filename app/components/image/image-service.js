function ImageService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			var data = JSON.parse(res)
			if(DebugFlag){console.log('Image Data:', res)}
			callWhenDone(data);
		})
	}
}
