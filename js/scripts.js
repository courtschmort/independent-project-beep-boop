// BACK-END LOGIC

function functionBeepBoop(input) {
  let array = [];

  for (index = 0; index <= input; index ++) {
    if (index.toString() === "3") {
      array.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
      console.log(array);
    } else {
      array.push(" " + index);
      console.log(array);
    }
    // else if (index.toString() === "2") {
    //   array.push("Boop!");
    //   console.log(array);
    // } else if (index.toString() === "1") {
    //   array.push("Beep!");
    //   console.log(array);
    // } else if (input === "0") {
    //   alert("Zero. Really? Please enter a number greater than 0.");
    // } else {
    //   array.push();
    // }

  }
  return array;


  // let newArray = originalArray.map(function(input, i) {
  //   if (input.includes("3")) {
  //     originalArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
  //     console.log(originalArray);
  //   } else if (input.includes("2")) {
  //     return originalArray.push("Boop!");
  //     console.log(originalArray);
  //   } else if (input.includes("1")) {
  //     return originalArray.push("Beep!");
  //     console.log(originalArray);
  //   } else {
  //     alert("Give me something to work with! Please enter a number.");
  //   }
  //   return newArray;
  // })

} // This is the end of the function.

// FRONT-END LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();

    var output = functionBeepBoop(input);

    $("#output").text(output);

  }); // This is the end of the funciton.
}); // This is the end of the function.
