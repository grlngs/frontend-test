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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLmpzXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdCQoXCIjbWVudVwiKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICQodGhpcykuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS5hdHRyKFwiaWRcIikgKyAnLmh0bWwnO1xuXHR9KTtcblxuXHQkKCcjZnVsbHBhZ2UnKS5mdWxscGFnZSh7XG5cdFx0YW5jaG9yczogWydCbG9ja2xldmVsJywgJ0Fib3V0JywgJ1dvcmsnLCAnQ29udGFjdCddLFxuXHRcdG1lbnU6ICcjbWVudScsXG5cdFx0bG9vcFRvcDogdHJ1ZSxcblx0XHRsb29wQm90dG9tOiB0cnVlXG5cdH0pO1xufSk7XG5cblxuXG5jb25zb2xlLmxvZygnSGVsbG8gdGhlcmUhJyk7XG4kKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
