var discordButton = document.querySelector(".discord")
discordButton.onclick = function() {
    var discordSpan = document.getElementById("discord-js-text")
    navigator.clipboard.writeText("non#8832")
    discordSpan.textContent = "Copiado"
    setTimeout(() => {
        discordSpan.textContent = "Discord"
    }, 1000)
}

var button = document.getElementById("light-mode")
console.log(button);
button.onclick = function(){
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

const $myProjetcs = document.querySelector(".projects");
$myProjetcs.addEventListener("click", () => {
    window.open("./projetos.html", "_self")
})