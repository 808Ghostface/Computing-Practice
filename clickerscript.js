document.addEventListener("DOMContentLoaded", function () {
    // Variables
    let minutes = 00;
    let seconds = 00;
    let clickCount = 0;
    let timer;
    let timeLeft;
    let timerInterval;
    let timerActive = false;

    // Elements
    const amendMinutes = document.getElementById("minutes");
    const amendSeconds = document.getElementById("seconds");
    const clickCounter = document.getElementById("click-counter");
    const clickButton = document.getElementById("click-button");
    const multiplierDisplay = document.getElementById("multiplier-display");
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
