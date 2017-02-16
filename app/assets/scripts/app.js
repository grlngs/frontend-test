// app.js
$(document).on('ready', function() {
	$(".slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});

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


$(document).ready(function() {
    $("#submit_btn").click(function() {

	    var proceed = true;
		$("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){
			$(this).css('border-color','');
			if(!$.trim($(this).val())){
				$(this).css('border-color','red');
				proceed = false;
			}
			var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
				$(this).css('border-color','red');
				proceed = false;
			}
		});

        if(proceed)
        {
      post_data = {
				'user_name'		: $('input[name=name]').val(),
				'user_email'	: $('input[name=email]').val(),
				'msg'			: $('textarea[name=message]').val()
			};


      $.post('sent_mail.php', post_data, function(response){
				if(response.type == 'error'){
					output = '<div class="error">'+response.text+'</div>';
				}else{
				    output = '<div class="success">'+response.text+'</div>';

					$("#contact_form  input[required=true], #contact_form textarea[required=true]").val('');
					$("#contact_form #contact_body").slideUp(); //hide form after success
				}
				$("#contact_form #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });

    $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
        $(this).css('border-color','');
        $("#result").slideUp();
    });
});


console.log('Hello there!');
$(document).foundation();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLmpzXG4kKGRvY3VtZW50KS5vbigncmVhZHknLCBmdW5jdGlvbigpIHtcblx0JChcIi5zbGlkZXJcIikuc2xpY2soe1xuXHRcdGRvdHM6IHRydWUsXG5cdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxXG5cdH0pO1xuXG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0JChcIiNtZW51XCIpLmNoYW5nZShmdW5jdGlvbigpe1xuXHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLmF0dHIoXCJpZFwiKSArICcuaHRtbCc7XG5cdH0pO1xuXG5cdCQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcblx0XHRhbmNob3JzOiBbJ0Jsb2NrbGV2ZWwnLCAnQWJvdXQnLCAnV29yaycsICdDb250YWN0J10sXG5cdFx0bWVudTogJyNtZW51Jyxcblx0XHRsb29wVG9wOiB0cnVlLFxuXHRcdGxvb3BCb3R0b206IHRydWVcblx0fSk7XG59KTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiI3N1Ym1pdF9idG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cblx0ICAgIHZhciBwcm9jZWVkID0gdHJ1ZTtcblx0XHQkKFwiI2NvbnRhY3RfZm9ybSBpbnB1dFtyZXF1aXJlZD10cnVlXSwgI2NvbnRhY3RfZm9ybSB0ZXh0YXJlYVtyZXF1aXJlZD10cnVlXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHQkKHRoaXMpLmNzcygnYm9yZGVyLWNvbG9yJywnJyk7XG5cdFx0XHRpZighJC50cmltKCQodGhpcykudmFsKCkpKXtcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsJ3JlZCcpO1xuXHRcdFx0XHRwcm9jZWVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgZW1haWxfcmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuXHRcdFx0aWYoJCh0aGlzKS5hdHRyKFwidHlwZVwiKT09XCJlbWFpbFwiICYmICFlbWFpbF9yZWcudGVzdCgkLnRyaW0oJCh0aGlzKS52YWwoKSkpKXtcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsJ3JlZCcpO1xuXHRcdFx0XHRwcm9jZWVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cbiAgICAgICAgaWYocHJvY2VlZClcbiAgICAgICAge1xuICAgICAgcG9zdF9kYXRhID0ge1xuXHRcdFx0XHQndXNlcl9uYW1lJ1x0XHQ6ICQoJ2lucHV0W25hbWU9bmFtZV0nKS52YWwoKSxcblx0XHRcdFx0J3VzZXJfZW1haWwnXHQ6ICQoJ2lucHV0W25hbWU9ZW1haWxdJykudmFsKCksXG5cdFx0XHRcdCdtc2cnXHRcdFx0OiAkKCd0ZXh0YXJlYVtuYW1lPW1lc3NhZ2VdJykudmFsKClcblx0XHRcdH07XG5cblxuICAgICAgJC5wb3N0KCdzZW50X21haWwucGhwJywgcG9zdF9kYXRhLCBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdGlmKHJlc3BvbnNlLnR5cGUgPT0gJ2Vycm9yJyl7XG5cdFx0XHRcdFx0b3V0cHV0ID0gJzxkaXYgY2xhc3M9XCJlcnJvclwiPicrcmVzcG9uc2UudGV4dCsnPC9kaXY+Jztcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdCAgICBvdXRwdXQgPSAnPGRpdiBjbGFzcz1cInN1Y2Nlc3NcIj4nK3Jlc3BvbnNlLnRleHQrJzwvZGl2Pic7XG5cblx0XHRcdFx0XHQkKFwiI2NvbnRhY3RfZm9ybSAgaW5wdXRbcmVxdWlyZWQ9dHJ1ZV0sICNjb250YWN0X2Zvcm0gdGV4dGFyZWFbcmVxdWlyZWQ9dHJ1ZV1cIikudmFsKCcnKTtcblx0XHRcdFx0XHQkKFwiI2NvbnRhY3RfZm9ybSAjY29udGFjdF9ib2R5XCIpLnNsaWRlVXAoKTsgLy9oaWRlIGZvcm0gYWZ0ZXIgc3VjY2Vzc1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoXCIjY29udGFjdF9mb3JtICNjb250YWN0X3Jlc3VsdHNcIikuaGlkZSgpLmh0bWwob3V0cHV0KS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgIH0sICdqc29uJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjY29udGFjdF9mb3JtICBpbnB1dFtyZXF1aXJlZD10cnVlXSwgI2NvbnRhY3RfZm9ybSB0ZXh0YXJlYVtyZXF1aXJlZD10cnVlXVwiKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsJycpO1xuICAgICAgICAkKFwiI3Jlc3VsdFwiKS5zbGlkZVVwKCk7XG4gICAgfSk7XG59KTtcblxuXG5jb25zb2xlLmxvZygnSGVsbG8gdGhlcmUhJyk7XG4kKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
