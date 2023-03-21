const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const studyHoursInput = document.getElementById("studyHoursInput");
const timerSound = document.getElementById("timerSound");

let timeLeft = 25 * 60;
let restTime = 5 * 60;
let studyHours = 0;
let timerInterval = null;

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (timeLeft === 0) {
      timerSound.play();
      timeLeft = restTime;
    } else if (timeLeft < 0) {
      timerSound.play();
      timeLeft = 25 * 60;
      studyHours--;
      studyHoursInput.value = studyHours.toString();
    }

    timerDisplay.textContent = displayTime(timeLeft);
    timeLeft--;
  }, 1000);
}

startButton.addEventListener("click", () => {
  studyHours = parseFloat(studyHoursInput.value);

  if (studyHours < 1) {
    alert("Please enter at least 1 hour for studying.");
    return;
  }

  timeLeft = 25 * 60;
  restTime = 5 * 60;
  timerDisplay.textContent = displayTime(timeLeft);
  startTimer();
});
