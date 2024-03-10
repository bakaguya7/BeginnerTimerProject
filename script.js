let timer;
let count = 0;

function handleKeyPress(event) {
  if (event.key === "Enter") {
    startTimer();
  }
}

function startTimer() {
  const inputNumber = document.getElementById('inputNumber').value;
  if (inputNumber == "" || inputNumber == 0) {
    alert("Please enter a number greater than zero");
    return;
  }
  document.getElementById('timerDisplay').innerHTML = inputNumber;
  count = inputNumber;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    count--;
    document.getElementById('timerDisplay').innerHTML = count;
    if (count <= 0) {
        clearInterval(timer);
    }
}

function stopTimer() {
    const inputNumber = document.getElementById('inputNumber').value;
    if (inputNumber == "" || inputNumber == 0) {
        alert("Please enter a number");
        return;
    } else {
        clearInterval(timer);
    }
}

function resetTimer() {
    const inputNumber = document.getElementById('inputNumber').value;
    if (inputNumber == "" || inputNumber == 0) {
        alert("Please enter a number");
        return;
    } else {
        clearInterval(timer);
        document.getElementById('timerDisplay').innerHTML = 0;
        document.getElementById('inputNumber').value = "";
        count = 0;
    }
}