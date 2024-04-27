document.addEventListener("DOMContentLoaded", function () {
    
    let clickCount = 0;
    let timer;
    let timeLeft;
    let timerActive = false;

    const clickCounter = document.getElementById("click-counter");
    const clickButton = document.getElementById("click-button");
    const multiplierDisplay = document.getElementById("multiplier-display");
    const timerDisplay = document.getElementById("timer-display");
    const setTimer = document.getElementById("set-timer");
    const startTimer = document.getElementById("start-timer");
    const dropDown = document.getElementById("timer-dropdown");

    clickButton.addEventListener("click", function () {
       clickCount++;
       clickCounter.textContent = `Clicks: ${clickCount}`;
   });

   setTimer.addEventListener("click",function() {
     showTime();

   });

   dropDown.addEventListener("change", function(){
     const input = parseInt(this.value);
     const hours = Math.floor(input / 3600);
     const minutes = Math.floor((input % 3600) / 60);
     const seconds = input % 60;

     const showHours = String(hours).padStart(2, "0");
     const showMins = String(minutes).padStart(2, "0");
     const showSecs = String(seconds).padStart(2, "0");

     timerDisplay.textContent = "${showHours}":"${showMins}":"${showSecs}";

   });

});
