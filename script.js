// Load background music and click sound
let clickSound = new Audio("sounds/click.mp3");
let bgMusic = document.getElementById("bg-music");

// Play background music when the page loads
window.onload = function() {
  bgMusic.play(); // Play background music
};

// Play click sound on button clicks
document.getElementById("button").addEventListener("click", function() {
  clickSound.play(); // Play click sound
});

document.getElementById("back-button").addEventListener("click", function() {
  clickSound.play(); // Play click sound
});
