const prizes = ["🧁 Cake!", "🍾 Wine!", "💄 Lipstick!"];

function revealPrize(index) {
    document.getElementById("prize-message").innerHTML = `You got: ${prizes[index]}`;
}

document.getElementById("play-music").addEventListener("click", function() {
  let audio = document.getElementById("bg-music");
  audio.play();
});

