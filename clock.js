document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 1000);
});

function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();
    let hours = now.getHours(); // 24-hour format not AM/PM lol
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = now.toDateString();
}
