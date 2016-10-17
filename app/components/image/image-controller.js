(function(){

	//var imageService = new ImageService();

	//imageService.getImage(displayImage);
	displayImage();

	function displayImage(imageObject){
		$('body').css({
		'background': `url(https://source.unsplash.com/category/nature/1920x1080)`,
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover',
		'background-repeat': 'no-repeat'
		})
	}
	
	
}())
