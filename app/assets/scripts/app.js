// app.js

//LOAD MAIN MENU (PAGE)
$( document ).ready(function() {
    $("#stage").load("dashboard/index.php");
});
$("#dashboard").click(function(){
  $("#stage").load("dashboard/index.php?render=Dashboard");
});

  $("#tester").click(function(){
      $("#stage").load("dashboard/index.php?render=Account");
    });

$("#documenten").click(function(){
    $("#stage").load("documenten/index.php");
});

$("#adressenboek").click(function(){
    $("#stage").load("adressenboek/index.php");
});

$("#vimmeldingen").click(function(){
    $("#stage").load("vimmeldingen/index.php");
});

//TOP MENU (LOAD PAGE) 
$("#topProfiel").click(function(){
    $("#stage").load("dashboard/index.php?render=Profiel");
  });
  $("#topMeldingen").click(function(){
    $("#stage").load("dashboard/index.php?render=Meldingen");
  });
  $("#topBerichten").click(function(){
    $("#stage").load("dashboard/index.php?render=Berichten");
  });
  $("#topInstellingen").click(function(){
    $("#stage").load("dashboard/index.php?render=Instellingen");
  });
  $("#topFaq").click(function(){
    $("#stage").load("dashboard/index.php?render=Faq");
  });

//LOAD SUBPAGE
function openPage(pagename) {
    var i;
    var x = document.getElementsByClassName("subPage");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(pagename).style.display = "block";
}

//FULLSCREEN
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

//MAIN ROLLOVER
$(document).ready(function(){
  $("#dashboard").mouseover(function(){
    $("#dashboardtag").css("opacity", "1");
    $("#dashboardtag").css("width", "150px");
  });
  $("#dashboard").mouseout(function(){
      $("#dashboardtag").css("opacity", "0");
      $("#dashboardtag").css("width", "0");

  });

  $("#documenten").mouseover(function(){
      $("#documententag").css("opacity", "1");
      $("#documententag").css("width", "150px");
  });
  $("#documenten").mouseout(function(){
      $("#documententag").css("opacity", "0");
      $("#documententag").css("width", "0");
  });

  $("#adressenboek").mouseover(function(){
    $("#adressenboektag").css("opacity", "1");
    $("#adressenboektag").css("width", "150px");
  });
  $("#adressenboek").mouseout(function(){
      $("#adressenboektag").css("opacity", "0");
      $("#adressenboektag").css("width", "0");
  });

$("#vimmeldingen").mouseover(function(){
  $("#vimmeldingentag").css("opacity", "1");
  $("#vimmeldingentag").css("width", "150px");
});
$("#vimmeldingen").mouseout(function(){
    $("#vimmeldingentag").css("opacity", "0");
    $("#vimmeldingentag").css("width", "0");
});

});

//ROLLOVER ANIMATIE
var effects = document.querySelectorAll('.effects')[0];
effects.addEventListener('click', function(e) {
  if (e.target.className.indexOf('hvr') > -1) {
    e.preventDefault();
    e.target.blur();
  }
});


console.log('Hello there!');
$(document).foundation();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLmpzXG5cbi8vTE9BRCBNQUlOIE1FTlUgKFBBR0UpXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoXCIjc3RhZ2VcIikubG9hZChcImRhc2hib2FyZC9pbmRleC5waHBcIik7XG59KTtcbiQoXCIjZGFzaGJvYXJkXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoXCIjc3RhZ2VcIikubG9hZChcImRhc2hib2FyZC9pbmRleC5waHA/cmVuZGVyPURhc2hib2FyZFwiKTtcbn0pO1xuXG4gICQoXCIjdGVzdGVyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiI3N0YWdlXCIpLmxvYWQoXCJkYXNoYm9hcmQvaW5kZXgucGhwP3JlbmRlcj1BY2NvdW50XCIpO1xuICAgIH0pO1xuXG4kKFwiI2RvY3VtZW50ZW5cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKFwiI3N0YWdlXCIpLmxvYWQoXCJkb2N1bWVudGVuL2luZGV4LnBocFwiKTtcbn0pO1xuXG4kKFwiI2FkcmVzc2VuYm9la1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQoXCIjc3RhZ2VcIikubG9hZChcImFkcmVzc2VuYm9lay9pbmRleC5waHBcIik7XG59KTtcblxuJChcIiN2aW1tZWxkaW5nZW5cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKFwiI3N0YWdlXCIpLmxvYWQoXCJ2aW1tZWxkaW5nZW4vaW5kZXgucGhwXCIpO1xufSk7XG5cbi8vVE9QIE1FTlUgKExPQUQgUEFHRSkgXG4kKFwiI3RvcFByb2ZpZWxcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKFwiI3N0YWdlXCIpLmxvYWQoXCJkYXNoYm9hcmQvaW5kZXgucGhwP3JlbmRlcj1Qcm9maWVsXCIpO1xuICB9KTtcbiAgJChcIiN0b3BNZWxkaW5nZW5cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKFwiI3N0YWdlXCIpLmxvYWQoXCJkYXNoYm9hcmQvaW5kZXgucGhwP3JlbmRlcj1NZWxkaW5nZW5cIik7XG4gIH0pO1xuICAkKFwiI3RvcEJlcmljaHRlblwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQoXCIjc3RhZ2VcIikubG9hZChcImRhc2hib2FyZC9pbmRleC5waHA/cmVuZGVyPUJlcmljaHRlblwiKTtcbiAgfSk7XG4gICQoXCIjdG9wSW5zdGVsbGluZ2VuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgJChcIiNzdGFnZVwiKS5sb2FkKFwiZGFzaGJvYXJkL2luZGV4LnBocD9yZW5kZXI9SW5zdGVsbGluZ2VuXCIpO1xuICB9KTtcbiAgJChcIiN0b3BGYXFcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKFwiI3N0YWdlXCIpLmxvYWQoXCJkYXNoYm9hcmQvaW5kZXgucGhwP3JlbmRlcj1GYXFcIik7XG4gIH0pO1xuXG4vL0xPQUQgU1VCUEFHRVxuZnVuY3Rpb24gb3BlblBhZ2UocGFnZW5hbWUpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdWJQYWdlXCIpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgeFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VuYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vL0ZVTExTQ1JFRU5cbmZ1bmN0aW9uIHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG4gIGlmICgoZG9jdW1lbnQuZnVsbFNjcmVlbkVsZW1lbnQgJiYgZG9jdW1lbnQuZnVsbFNjcmVlbkVsZW1lbnQgIT09IG51bGwpIHx8XG4gICAoIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW4gJiYgIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbikpIHtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbihFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gIH1cbn1cblxuLy9NQUlOIFJPTExPVkVSXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAkKFwiI2Rhc2hib2FyZFwiKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcbiAgICAkKFwiI2Rhc2hib2FyZHRhZ1wiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAkKFwiI2Rhc2hib2FyZHRhZ1wiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xuICB9KTtcbiAgJChcIiNkYXNoYm9hcmRcIikubW91c2VvdXQoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIjZGFzaGJvYXJkdGFnXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgJChcIiNkYXNoYm9hcmR0YWdcIikuY3NzKFwid2lkdGhcIiwgXCIwXCIpO1xuXG4gIH0pO1xuXG4gICQoXCIjZG9jdW1lbnRlblwiKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIjZG9jdW1lbnRlbnRhZ1wiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICQoXCIjZG9jdW1lbnRlbnRhZ1wiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xuICB9KTtcbiAgJChcIiNkb2N1bWVudGVuXCIpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiI2RvY3VtZW50ZW50YWdcIikuY3NzKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAkKFwiI2RvY3VtZW50ZW50YWdcIikuY3NzKFwid2lkdGhcIiwgXCIwXCIpO1xuICB9KTtcblxuICAkKFwiI2FkcmVzc2VuYm9la1wiKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcbiAgICAkKFwiI2FkcmVzc2VuYm9la3RhZ1wiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAkKFwiI2FkcmVzc2VuYm9la3RhZ1wiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xuICB9KTtcbiAgJChcIiNhZHJlc3NlbmJvZWtcIikubW91c2VvdXQoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIjYWRyZXNzZW5ib2VrdGFnXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgJChcIiNhZHJlc3NlbmJvZWt0YWdcIikuY3NzKFwid2lkdGhcIiwgXCIwXCIpO1xuICB9KTtcblxuJChcIiN2aW1tZWxkaW5nZW5cIikubW91c2VvdmVyKGZ1bmN0aW9uKCl7XG4gICQoXCIjdmltbWVsZGluZ2VudGFnXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAkKFwiI3ZpbW1lbGRpbmdlbnRhZ1wiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xufSk7XG4kKFwiI3ZpbW1lbGRpbmdlblwiKS5tb3VzZW91dChmdW5jdGlvbigpe1xuICAgICQoXCIjdmltbWVsZGluZ2VudGFnXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICQoXCIjdmltbWVsZGluZ2VudGFnXCIpLmNzcyhcIndpZHRoXCIsIFwiMFwiKTtcbn0pO1xuXG59KTtcblxuLy9ST0xMT1ZFUiBBTklNQVRJRVxudmFyIGVmZmVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWZmZWN0cycpWzBdO1xuZWZmZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdodnInKSA+IC0xKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgfVxufSk7XG5cblxuY29uc29sZS5sb2coJ0hlbGxvIHRoZXJlIScpO1xuJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuIl0sImZpbGUiOiJhcHAuanMifQ==
