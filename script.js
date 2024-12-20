// Get references to DOM elements
const body = document.querySelector('body');
const hourHand = document.querySelector('.hour');
const minutesHand = document.querySelector('.minutes');
const secondHand = document.querySelector('.second');
const modeSwitch = document.querySelector('.modeSwitch');


modeSwitch.addEventListener('click', () => {

  body.classList.toggle('dark');

  const isDarkMode = body.classList.contains('dark');
  console.log(isDarMode);
});

// Function to update the clock hands
const updateTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;  // Corrected hour calculation

    // Update the rotations of the clock hands
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minutesHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;  // Add this line for hour hand
};

// Call the updateTime function every second
setInterval(updateTime, 1000);
