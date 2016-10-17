function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = '//source.unsplash.com/category/nature/1920x1080'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		return $.get(url2, function (res) {
			//var data = JSON.parse(res)
			if(DebugFlag){console.log('Image Data:', res)}
			callWhenDone(data);
		})
	}
}
