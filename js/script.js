$(document).ready(function () {
  $("#design").click(function () {
    $("#caution1").toggle();
    $("#design").toggle();
  });
});
$(document).ready(function () {
  $("#development").click(function () {
    $("#caution2").toggle();
    $("#development").toggle();

  });
});

$(document).ready(function () {
  $("#management").click(function () {
    $("#caution3").toggle();
    $("#management").toggle();

  });
});

$(document).ready(function () {
  $("#DEVELOPMENT2").click(function () {
    $("#DEVELOPMENT").toggle();
    $("#DEVELOPMENT2").toggle();

  });
});

$(document).ready(function () {
  $("#PRODUCT").click(function () {
    $("#PRODUCT").toggle();
    $("#PRODUCT2").toggle();

  });
});

$(document).ready(function () {
  $("#PRODUCT2").click(function () {
    $("#PRODUCT").toggle();
    $("#PRODUCT2").toggle();

  });
});

$(document).ready(function () {
  $(".form2").submit(function (event) {
    var name = $(".name").val();
    alert("How are you " + name + ". Thank you for contacting us.");
    event.preventDefault();
  });
});
function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name == "" || email == "" || message == "") {
    alert("enter your name, email and a commment")
  }
  else alert(name + " ,we have received your message. Thank you for reaching to us.");
}