const jsConfetti = new JSConfetti();

var DButton = document.querySelector(".discord")
let timeout;

DButton.onclick = (event) => {
    const discordText = document.getElementById("discord-js-text");
    discordText.innerText = "noonbr"

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        discordText.innerText = "Discord"
    }, 1000)

    navigator.clipboard.writeText("noonbr")

    const {x, y} = discordText.getBoundingClientRect();
    jsConfetti.addConfettiAtPosition({confettiDispatchPosition: {x, y}, emojis:["🎉"], confettiRadius: 10, confettiNumber: 10, emojiSize: 15});
}

var button = document.getElementById("light-mode")
button.onclick = () => {
    var body = document.querySelector("body");

    if (body.classList.contains("light-mode")){
        body.classList.remove("light-mode");
        this.classList.remove("fa-moon");
        this.classList.add("fa-sun");
    } else {
        body.classList.add("light-mode");
        this.classList.remove("fa-sun");
        this.classList.add("fa-moon");
    }
}