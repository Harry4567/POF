let seconds = 5;
const clock = document.getElementById("clock");
const secondsSpan = document.getElementById("seconds");
let angle = 0;

function updateClock() {
  secondsSpan.innerHTML = seconds;
  angle -= 6;
  clock.style.transform = `rotate(${angle}deg)`;
  
  if (seconds === 0) {
    clearInterval(clockInterval);
    return;
  }
  seconds--;
}

const clockInterval = setInterval(updateClock, 1000);