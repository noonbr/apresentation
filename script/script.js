function copyToClipboard() {
    const discord = document.getElementById("discord-js-text")
    navigator.clipboard.writeText("non#8832")
    discord.innerText = "Copiado!"
    setTimeout(
        function (){
            discord.innerHTML = "Discord"
        },
        1000
    )
}