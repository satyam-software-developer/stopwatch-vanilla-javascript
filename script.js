//Stopwatch JS
// Execute the following function when the window finishes loading
window.onload = function () {
  // Initialize variables for seconds and tens with initial values "00"
  var seconds = "00";
  var tens = "00";
  // Get references to HTML elements with specific IDs
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval; // Declare a variable to hold the interval timer ID

  // When the start button is clicked, start the timer by calling startTimer function every 20 milliseconds
  buttonStart.onclick = function () {
    Interval = setInterval(startTimer, 20);
  };

  // When the stop button is clicked, clear the interval to stop the timer
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // When the reset button is clicked, clear the interval, reset the values of seconds and tens, and update the display
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  // Define the function to start the timer
  function startTimer() {
    tens++; // Increment the value of tens by 1

    // Update the display for tens if it's less than or equal to 9
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
      console.log(tens + "One");
    }

    // Update the display for tens if it's greater than 9
    if (tens > 9) {
      appendTens.innerHTML = tens;
      console.log(tens + "two");
    }

    // Update the display for seconds and reset tens if tens exceeds 99
    if (tens > 99) {
      console.log(tens + "three");

      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    // Update the display for seconds if it's greater than 9
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
      console.log(tens + "four");
    }
  }
};
