let themeSetManually = false;

document.addEventListener('DOMContentLoaded', function() {
    updateBackground();
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});

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

function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    if (currentTheme === 'dark') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        themeSetManually = true;
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeSetManually = true;
    }
}
