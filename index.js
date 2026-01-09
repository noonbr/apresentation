const jsConfetti = new JSConfetti();

let timeout;
function copyDiscordUser() {
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

let lightModeStatus = false;
function toggleLightMode() {
    const body = document.querySelector("body");
    const icon = document.querySelector("#light-mode");

    lightModeStatus = !lightModeStatus;

    if (lightModeStatus){
        body.classList.add("light-mode");
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    } else {
        body.classList.remove("light-mode");
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    }
}