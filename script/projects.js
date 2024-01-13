const videos = document.getElementsByClassName("video-collapse-title");
const $resourceList = document.querySelector(".list_resource");

$resourceList.addEventListener("click", (e) => {
    const element = e.target
    const isShowElement = e.srcElement.classList.contains("video-collapse-title")
    if (element.nodeName === "P" && isShowElement){

        const $parentElement = element.parentElement
        const $video = $parentElement.querySelector("iframe")
        
        if (!$video) {
            return
        }

        const videoCurrentState = $video.classList.toggle("show")
        element.innerText = videoCurrentState ? "Ocultar Vídeo" : "Mostrar Vídeo"
    }
})