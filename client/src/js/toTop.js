const toTop = document.getElementById('js--to-top');

window.onscroll = () => {
    if (window.scrollY > 300) {
        toTop.classList.add('is_show');
    }
    if (window.scrollY < 300) {
        toTop.classList.remove('is_show');
    }
    toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};
