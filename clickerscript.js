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

   function showTime() {

minutes = Math.floor(time / 60);
seconds = Math.floor(time / 60);
   }

 startTimer.addEventListener("click",function() {

 });

 window.addEventListener("beforeunload", function () {
     clearInterval(timerInterval);
 });

});
