// app.js

$(document).ready(function(){
	$("#menu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});

	$('#fullpage').fullpage({
		anchors: ['Blocklevel', 'About', 'Work', 'Contact'],
		menu: '#menu',
		loopTop: true,
		loopBottom: true
	});
});



console.log('Hello there!');
$(document).foundation();
