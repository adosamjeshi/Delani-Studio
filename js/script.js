$(document).ready(function(){
	$("#design1").click(function(){
	  $("#caution1").toggle();
	  $("#design").toggle();
	});

	$("#development1").click(function(){
	  $("#caution2").toggle();
	  $("#development").toggle();
	});
  
	$("#management1").click(function(){
	  $("#caution3").toggle();
	  $("#management").toggle();
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