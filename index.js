let minutesLeft = 60;
const timerEl = document.getElementById("timer");
const messageEl = document.getElementById("message");
function updateDisplay() {
  let mins = minutesLeft;
  let secs = "00"; 
  timerEl.textContent = `Залишилось: ${mins}:${secs}`;
}
const interval = setInterval(() => {
  minutesLeft--;
  updateDisplay();
  if (minutesLeft === 30) {
    messageEl.textContent = "Увага: залишилось менше половини часу!";
  }
  if (minutesLeft <= 0) {
    clearInterval(interval);
    timerEl.textContent = "Час вийшов!";
  }
}, 60000);
updateDisplay();


// 2

const display = document.getElementById("timerSeconds");
const restartButton = document.getElementById("startButton");
let remainingTimeMs = 30 * 1000; 
let timerId;
function launchCountdown() {
  restartButton.disabled = true;
  display.classList.remove("animate");
  remainingTimeMs = 30 * 1000;
  timerId = setInterval(() => {
    remainingTimeMs -= 10;
    if (remainingTimeMs <= 0) {
      clearInterval(timerId);
      display.textContent = "0.000";
      restartButton.disabled = false;
      return;
    }
    if (remainingTimeMs <= 10000) {
      display.classList.add("animate");
    }
    const formattedSeconds = (remainingTimeMs / 1000).toFixed(3);
    display.textContent = formattedSeconds;
  }, 10);
}
restartButton.onclick = () => {
  launchCountdown();
};
launchCountdown();
