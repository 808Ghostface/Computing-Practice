document.addEventListener("DOMContentLoaded", function () {
    // Variables
    let clickCount = 0;
    let lastClickTime = 0;
    let timerSeconds = 0;
    let timerInterval;
    let multiplier = 1;
    let timerActive = false;

    // Elements
    const clickCounter = document.getElementById("click-counter");
    const clickButton = document.getElementById("click-button");
    const multiplierDisplay = document.getElementById("multiplier-display");
    const timerDisplay = document.getElementById("timer-display");
    const timerInput = document.getElementById("timer-input");

    // Click event listener for the main button
    clickButton.addEventListener("click", function () {
        if (!timerActive) {
            // Start the timer only on the first click
            startTimer();
            timerActive = true;
        }

        clickCount++;
        lastClickTime = Date.now();

        // Check if the user clicked 15 times within the last 2 seconds
        if (clickCount % 15 === 0 && isWithin2Seconds(lastClickTime)) {
            // Increment the multiplier by one
            multiplier++;
            multiplierDisplay.textContent = `Multiplier: ${multiplier}x`;
            // Show the boost button after the original button is clicked 15 times within 2 seconds
            showBoostButton();
        }

        // Apply the current multiplier to the click count
        clickCounter.textContent = `Clicks: ${clickCount * multiplier}`;
    });

    // Start timer function
    function startTimer() {
        let duration = 3600; // 1 hour in seconds
        let start = Date.now();

        timerInterval = setInterval(function () {
            let elapsed = Math.floor((Date.now() - start) / 1000);
            let remaining = duration - elapsed;

            if (remaining <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "00:00:00";
            } else {
                let hours = Math.floor(remaining / 3600);
                let minutes = Math.floor((remaining % 3600) / 60);
                let seconds = remaining % 60;

                // Display timer in HH:MM:SS format
                timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
            }
        }, 1000);
    }

    // Format time helper function
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    // Show the boost button dynamically
    function showBoostButton() {
        const boostButton = document.createElement("button");
        boostButton.textContent = "Boost (50 clicks)";
        boostButton.id = "boost-button";
        document.body.appendChild(boostButton);
        boostButton.addEventListener("click", boostButtonClick);
    }

    // Boost button click event listener
    function boostButtonClick() {
        if (boostAvailable) {
            clickCount += 50; // Add 50 clicks
            boostAvailable = false; // Disable the boost button
            removeBoostButton(); // Remove the boost button
            clickCounter.textContent = `Clicks: ${clickCount * multiplier}`;
        }
    }

    // Stop the timer when the user leaves the page
    window.addEventListener("beforeunload", function () {
        clearInterval(timerInterval);
    });
});
