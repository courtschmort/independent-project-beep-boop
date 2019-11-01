// BACK-END LOGIC

function functionBeepBoop(input) {
  let array = [];
  if (input.toString() === "3") {
    array.push("I'm sorry, Dave. I'm afraid I can't do that.");
    console.log(array);
  } else if (input.toString() === "2") {
    array.push("Boop!");
    console.log(array);
  } else if (input.toString() === "1") {
    array.push("Beep!");
    console.log(array);
  } else {
    console.log("Shit.");
  }
  return array
}

// FRONT-END LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();

    var output = functionBeepBoop(input);

    $("#output").text(output);
  });
});
