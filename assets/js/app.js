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
