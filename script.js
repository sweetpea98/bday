// Load the click sound
let clickSound = new Audio();
clickSound.src = "click.mp3";
clickSound.load();

// Get all buttons
let buttons = document.querySelectorAll("button");

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", function() {
    clickSound.play();
  });
});
document.getElementById("play-music").addEventListener("click", function() {
  let audio = document.getElementById("bg-music");
  audio.play();
});
