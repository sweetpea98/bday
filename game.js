const prizes = ["🧁 Cake!", "🍾 Wine!", "💄 Lipstick!"];

function revealPrize(index) {
    document.getElementById("prize-message").innerHTML = `You got: ${prizes[index]}`;
}
