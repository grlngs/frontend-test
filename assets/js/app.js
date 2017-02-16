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
