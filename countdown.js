let countdownInterval = null;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('setCountdownBtn').addEventListener('click', setCountdown);
});

function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
    if (countdownInterval) {
        clearInterval(countdownInterval);  // clear previous countdown
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
            alarmSound.play();  // play alarm sound when countdown expires
        }
    }, 1000);
}

function setCountdown() {
    const countdownTarget = document.getElementById('countdownTarget').value;
    if (countdownTarget) {
        const targetDate = new Date(countdownTarget).getTime();
        startCountdown(targetDate);
    }
}
