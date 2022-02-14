const [btn] = document.getElementsByClassName('js-button');
const [video] = document.getElementsByClassName('js-video');

btn.addEventListener("click", () => {
    video.classList.toggle("js--video-active");
}
);
