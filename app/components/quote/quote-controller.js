(function(){
	
	var quoteService = new QuoteService();

	quoteService.getQuote(updateQuote);

	function updateQuote(obj){
		var template = ``
		var quote = obj.quote;
		var author = obj.author;
		template += `
		<blockquote class="quote">${quote}<cite class="author" id="author">${author}</cite></blockquote>
		`
		$('#quote').html(template);
	}
	
}())
