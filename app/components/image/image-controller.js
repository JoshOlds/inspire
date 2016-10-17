(function(){

	var imageService = new ImageService();

	imageService.getImage(displayImage);

	function displayImage(imageObject){
		$('body').css({
		'background': `url(${imageObject.url})`,
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover',
		'background-repeat': 'no-repeat'
		})
	}
	
	
}())
