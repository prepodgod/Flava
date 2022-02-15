const toTop = document.getElementById('js--to-top');
const header = document.getElementById('js-header__inner');
window.onscroll = () => {
    if (window.scrollY > 300) {
        toTop.classList.add('is_show');
    }
    if (window.scrollY < 300) {
        toTop.classList.remove('is_show');
    }
    if (window.scrollY > 1) {
        header.classList.add('js--is-scroled');
    }
    else {
        header.classList.remove('js--is-scroled');
    }
    toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};