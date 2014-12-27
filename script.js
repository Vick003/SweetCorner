$('.list-organize a').on('click', function(e) {
	e.preventDefault();
	var url = this.href;
	
	var urlArray = url.split('/');
	console.log(urlArray);
	var link = urlArray[urlArray.length-1]
	$('title').text(link);

	$('.list-organize a.current').removeClass('current');         // Clear current indicator
    $(this).addClass('current');

	
	$('#content').load(url + ' #content').hide().fadeIn('fast');
});