let countdown;

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 1) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "";
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
	document.getElementById("timer").innerHTML = seconds;
}