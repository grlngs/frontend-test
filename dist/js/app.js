$(document).on("ready",function(){$(".slider").slick({dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1})}),$(document).ready(function(){$("#menu").change(function(){window.location.href=$(this).find("option:selected").attr("id")+".html"}),$("#fullpage").fullpage({anchors:["Blocklevel","About","Work","Contact"],menu:"#menu",loopTop:!0,loopBottom:!0})}),$(document).ready(function(){$("#submit_btn").click(function(){var t=!0;$("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){$(this).css("border-color",""),$.trim($(this).val())||($(this).css("border-color","red"),t=!1);var e=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;"email"!=$(this).attr("type")||e.test($.trim($(this).val()))||($(this).css("border-color","red"),t=!1)}),t&&(post_data={user_name:$("input[name=name]").val(),user_email:$("input[name=email]").val(),msg:$("textarea[name=message]").val()},$.post("sent_mail.php",post_data,function(t){"error"==t.type?output='<div class="error">'+t.text+"</div>":(output='<div class="success">'+t.text+"</div>",$("#contact_form  input[required=true], #contact_form textarea[required=true]").val(""),$("#contact_form #contact_body").slideUp()),$("#contact_form #contact_results").hide().html(output).slideDown()},"json"))}),$("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function(){$(this).css("border-color",""),$("#result").slideUp()})}),console.log("Hello there!"),$(document).foundation();