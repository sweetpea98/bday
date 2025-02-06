document.addEventListener("DOMContentLoaded", function() {
    let clickSound = new Audio("click.mp3");

    document.getElementById("openCard").addEventListener("click", function() {
        clickSound.play();
        this.style.transform = "scale(0.9)";
        setTimeout(() => {
            window.location.href = "card.html";
        }, 200);
    });

    document.getElementById("makeWish").addEventListener("click", function() {
        clickSound.play();
        this.style.transform = "scale(0.9)";
        setTimeout(() => {
            window.location.href = "wish.html";
        }, 200);
    });

    document.getElementById("submitWish")?.addEventListener("click", function() {
        clickSound.play();
        alert("Your wish has been sent! 🎉");
    });
});
