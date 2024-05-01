document.addEventListener("DOMContentLoaded", function () {
    // Variables
    let clickCount = 0;
    let timer;
    let timeLeft;
    let timerInterval;
    let timerActive = false;

    // Elements
    const amendMinutes = document.getElementById("minutes");
    const amendSeconds = document.getElementById("seconds");
  ////  const set15 = document.getElementById("set-15");
  //  const set30 = document.getElementById("set-30");
  //  const set60 = document.getElementById("set-60");

    const clickCounter = document.getElementById("click-counter");
    const clickButton = document.getElementById("click-btn");
    const multiplierDisplay = document.getElementById("multiplier-display");
    const setTimer = document.getElementById("set-timer");
    const startTimer = document.getElementById("start-timer");


    clickButton.addEventListener("click", function () {
       clickCount++;
       clickCounter.textContent = `Clicks: ${clickCount}`;
   });

   setTimer.addEventListener("click",function() {

     showTime();
   });

   function showTime() {
    selectTime = document.querySelector('#timer-dropdown');
    minutes = selectTime.value;
    document.querySelector('.minutes').textContent = minutes/60;
    if (document.querySelector('.minutes').textContent < 10){
      document.querySelector('.minutes').textContent = "0" + document.querySelector('.minutes').textContent;
      }
   }

   function goTime() {
     let countDown = document.getElementById("seconds");
     if (document.querySelector('.minutes').textContent < 61)
     {
       countDown = 59
     }
const timer = setInterval(function() {
  countDown--;
  console.log(countdowns);
  if (countDown === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);
}

 startTimer.addEventListener("click",function() {
goTime();
 });

 window.addEventListener("beforeunload", function () {
     clearInterval(timerInterval);
 });
});

