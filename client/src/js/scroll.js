const [header] = document.getElementsByClassName('js-header__inner');
window.onscroll = () => {
    if (window, scrollY > 1) {
        header.classList.add('js--is-scroled');
    }
    else {
        header.classList.remove('js--is-scroled');
    }
};

