document.addEventListener("DOMContentLoaded", function () {
    // Variables
    let clickCount = 0;
    var start = document.getElementById("start-timer");
    var stop = document.getElementById("stop-timer");
    var reset = document.getElementById("reset-timer");
    var mins = document.getElementById("minutes");
    var secs = document.getElementById("seconds");

    // Elements

    const clickCounter = document.getElementById("click-counter");
    const clickButton = document.getElementById("click-btn");

    //reference to variables
    var startTimer = null;

    clickButton.addEventListener("click", function () {
       clickCount++;
       clickCounter.textContent = `Clicks: ${clickCount}`;
   });

   start.addEventListener('click', function(){
       //initialize the variable
       function goTime(){
           startTimer = setInterval(function() {
               time();
           }, 1000);
       }
   goTime();
});

stop.addEventListener("click", function(){
  clearInterval(startTimer);
});

reset.addEventListener('click', function(){
   mins.value = 0;
   secs.value = 0;
   //stop the timer after pressing "reset"
   stopInterval();
   ableStart();
   disableClick();
   return;
});

function time(){
   if(mins.value == 0 && secs.value == 0){
       mins.value = 0;
       secs.value = 0;
   }
   else if(secs.value != 0){
       secs.value--;
   }
   else if(mins.value != 0 && secs.value == 0){
       secs.value = 59;
       mins.value--;
     }
   return;
}

//stop the function after pressing the reset button,
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
   clearInterval(startTimer);
}


  window.addEventListener("beforeunload", function () {
     clearInterval(startTime);
  });
});

