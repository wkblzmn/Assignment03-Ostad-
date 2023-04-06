function updateClock() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // add leading zero to single digit numbers
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var timeString = hours + ":" + minutes + ":" + seconds;

  // display the time
  document.getElementById("clock").innerHTML = timeString;
}

// call the updateClock function every second
setInterval(updateClock, 1000);

// initialize the clock
updateClock();
