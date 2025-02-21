const alarmSound = new Audio('sounds/alarmsound.mp3');
let alarmTime = null;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('setAlarmBtn').addEventListener('click', setAlarm);
    document.getElementById('stopAlarmBtn').addEventListener('click', stopAlarm); // event listener for stop alarm button
    setInterval(checkAlarm, 1000);
});

function checkAlarm() {
    const now = new Date();
    if (alarmTime && now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes) {
        alarmSound.play().catch(error => {
            console.error("Error playing alarm sound: ", error);
        });  // play alarm sound
        alert("Alarm! Time to wake up!");
        alarmTime = null; // reset alarm after it triggers
    }
}

function setAlarm() {
    const alarmElement = document.getElementById('alarmTime');
    const alarmValue = alarmElement.value;
    const [hours, minutes] = alarmValue.split(":");
    alarmTime = { hours: parseInt(hours), minutes: parseInt(minutes) };
    alert(`Alarm set for ${alarmTime.hours}:${alarmTime.minutes}`);
    
}

// function to stop the alarm sound
function stopAlarm() {
    alarmSound.pause(); // pause the sound
    alarmSound.currentTime = 0; // reset the sound to the start babyyy
}
