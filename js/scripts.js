// BACK-END LOGIC

function functionBeepBoop(input) {
  let array = [];
  for (index = 0; index <= input; index ++) {
    if (index.toString().includes("3")) {
      array.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (index.toString().includes("2")) {
      array.push(" " + "Boop!");
    } else if (index.toString().includes("1")) {
      array.push(" " + "Beep!");
    } else if (input === "") {
      alert("Give me something to work with! Please enter a number.");
    } else {
      array.push(" " + index);
    }
  }
  return array;
} // This is the end of the function.

// FRONT-END LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();

    var output = functionBeepBoop(input);

    $("#output").text(output);

  }); // This is the end of the function.
}); // This is the end of the function.
