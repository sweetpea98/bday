// Load the click sound
let clickSound = new Audio("click.mp3");

// Get all buttons
let buttons = document.querySelectorAll("button");

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", function() {
    clickSound.play();
  });
});
