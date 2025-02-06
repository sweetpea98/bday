const prizes = ["🧁 Cake!", "🍾 Wine!", "💄 Lipstick!"];

function revealPrize(index) {
    document.getElementById("prize-message").innerHTML = `You got: ${prizes[index]}`;
}

document.addEventListener("click", function() {
  let audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  }
});
