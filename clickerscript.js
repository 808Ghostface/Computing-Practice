document.addEventListener("DOMContentLoaded", function () {
    // Variables
    let clickCount = 0;
    var secTime = 0;
    var interval;
    var start = document.getElementById("start-timer");
    var stop = document.getElementById("stop-timer");
    var reset = document.getElementById("reset-timer");
    var mins = document.getElementById("minutes");
    var secs = document.getElementById("seconds");
    var overall = document.getElementById("overallTime");

    // Elements

    const clickCounter = document.getElementById("click-counter");
    const clickButton = document.getElementById("click-btn");
    const welcome = document.getElementById("welcome-user");
    //reference to variables
    var startTimer = null;

    clickButton.addEventListener("click", function () {
       clickCount++;
       clickCounter.textContent = `Clicks: ${clickCount}`;
   });

   welcome.addEventListener("click", function(){
     let txt;
     let user = prompt("What is your name?");
     if (user == null || user == "") {
       txt = "Astronaut's Idle Clicker";
     } else {
       txt = user + "'s Idle Clicker";
     }
     document.getElementById("name-tag").textContent = txt;
   });
   start.addEventListener('click', function(){
       //initialize the variable
       function goTime(){
           startTimer = setInterval(function() {
               time();
           }, 1000);
       }
    if(mins.value == 0 && secs.value == 0){
        alert("Please select your time.");
        stop.hidden = true;
        start.hidden = false;
        clickButton.hidden = true;
      }
        else{
          goTime();
        }
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
       clickButton.hidden = true;
       clickCounter.textContent = `Congratulations! You've clicked ${clickCount} times.`;
   }
   else if(secs.value != 0){
       secs.value--;
       clickButton.hidden = false;
   }
   else if(mins.value != 0 && secs.value == 0){
       secs.value = 59;
       mins.value--;
       clickButton.hidden = false;
     }
   return;
}

//stop the function after pressing the reset button,
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
   clearInterval(startTimer);
   clickCount = 0;
}

window.onload = function secretTimer(){
  if(interval){
      clearInterval(interval);
    }
    interval = setInterval(() => {
      secTime += 1
      overall.innerHTML =
        Math.floor(secTime / 3600).toString().padStart(2, "0") + ":" + Math.floor((secTime % 3600) / 60).toString().padStart(2, "0") + ":" + Math.floor((secTime % 60)).toString().padStart(2, "0")
    }, 1000);
}
fetch('read.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("displayInfo");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.name;

            const hrsElement = document.createElement("p");
            hrsElement.textContent = "hours spent: " + data.hoursSpent;

            const clickElement = document.createElement("p");
            clickElement.textContent = "Clicks: " + data.click;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(hrsElement);
            dataDisplay.appendChild(clickElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));

  window.addEventListener("beforeunload", function () {
     clearInterval(startTime);
  });
});


  window.addEventListener("beforeunload", function () {
     clearInterval(startTime);
  });
});

