// Add the alarm sound
const alarmSound = new Audio('sounds/alarmsound.mp3');
let countdownInterval = null;
let alarmTime = null;
let themeSetManually = false;  // Variable to track manual theme toggle

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the clock and update every second
    updateClock();
    setInterval(updateClock, 1000);

    // Initialize background theme based on the time of day
    updateBackground();

    // Set event listeners for theme toggle, alarm, and countdown
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('setAlarmBtn').addEventListener('click', setAlarm);
    document.getElementById('setCountdownBtn').addEventListener('click', setCountdown);
    setInterval(checkAlarm, 1000);  // Check alarm every second
});

// Update the clock every second (24-hour format)
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();
    let hours = now.getHours(); // 24-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = now.toDateString();
}

// Change background color based on time of day
function updateBackground() {
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 6 && hours < 18) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
}

// Theme toggle function
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    if (currentTheme === 'dark') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        themeSetManually = true; // Manually toggled theme
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeSetManually = true; // Manually toggled theme
    }
}

// Countdown timer
function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
    if (countdownInterval) {
        clearInterval(countdownInterval);  // Clear previous countdown
    }
    
    countdownInterval = setInterval(function () {
        const now = new Date();
        const distance = targetDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "EXPIRED";
            alarmSound.play();  // Play alarm sound when countdown expires
        }
    }, 1000);
}

// Set a new countdown date
function setCountdown() {
    const countdownTarget = document.getElementById('countdownTarget').value;
    if (countdownTarget) {
        const targetDate = new Date(countdownTarget).getTime();
        startCountdown(targetDate);
    }
}

// Alarm feature
function checkAlarm() {
    const now = new Date();
    if (alarmTime && now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes) {
        alarmSound.play();  // Play alarm sound
        alert("Alarm! Time to wake up!");
        alarmTime = null; // Reset alarm after it triggers
    }
}

// Set the alarm
function setAlarm() {
    const alarmElement = document.getElementById('alarmTime');
    const alarmValue = alarmElement.value;
    const [hours, minutes] = alarmValue.split(":");
    alarmTime = { hours: parseInt(hours), minutes: parseInt(minutes) };
    alert(`Alarm set for ${alarmTime.hours}:${alarmTime.minutes}`);
}

// Initialize everything after page load
document.addEventListener('DOMContentLoaded', function() {
    // Set clock immediately
    updateClock();
    setInterval(updateClock, 1000);
    updateBackground();
});
