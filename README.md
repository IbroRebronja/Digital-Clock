# Digital Clock with Alarm and Countdown

This is a simple digital clock web application that features:

- Real-time clock with 24-hour format
- Theme toggle between light and dark mode
- Set and stop alarms with custom time
- Countdown timer feature
- Alarm sound when the set time is reached
- Persistent data storage using local storage

## Features

- **Clock**: Displays the current time and updates every second.
- **Theme Toggle**: Switch between light and dark themes.
- **Alarm**: Set an alarm time and hear the sound when it's time.
- **Countdown Timer**: Set a countdown timer and receive an alert when it expires.
- **Local Storage**: The alarm settings and themes are saved in the local storage so they persist even after the page is refreshed.

## Files Structure

- `index.html`: The main HTML file.
- `styles.css`: The CSS file for styling the clock and elements.
- `clock.js`: JavaScript for the clock, theme toggle, and countdown functionalities.
- `alarm.js`: JavaScript for alarm-related functions (setting alarm, playing sound, and stopping it).
- `sounds/alarmsound.mp3`: Alarm sound file.

## Usage

1. Clone the repository or download the files.
2. Open `index.html` in your browser to start the application.
3. Set your preferred theme (light or dark).
4. Set an alarm time and a countdown target.
5. The alarm will trigger and play sound when it's time.

## Installation

No installation required. Simply open the `index.html` file in a web browser.

## License

This project is licensed under the MIT License.
