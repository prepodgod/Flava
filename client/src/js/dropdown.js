const burger = document.getElementsByClassName("js-burger");
const menu = document.getElementsByClassName("js-menu");
const inner = document.getElementsByClassName("js-header__inner");

burger[0].addEventListener("click", () => {
    burger[0].classList.toggle("is-active");
    menu[0].classList.toggle("is-active");
    inner[0].classList.toggle("is-active");
}
);
