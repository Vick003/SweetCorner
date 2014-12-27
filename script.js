$('.list-organize a').on('click', function(e) {
	e.preventDefault();
	var url = this.href;
	
	var link_pos = url.lastIndexOf('/');
	var link = url.slice(link_pos + 1);
	$('title').text(link);

	$('.list-organize a.current').removeClass('current');         // Clear current indicator
    $(this).addClass('current');

	$('#container').remove();
	$('#content').load(url + ' #content').hide().fadeIn('fast');
});