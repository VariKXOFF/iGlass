let openButton = document.querySelector(".navigation__button"),
    closeButton = document.querySelector(".navigation-mobile__button"),
    navigationBar = document.querySelector('.navigation-mobile--visible');

document.addEventListener("DOMContentLoaded", () => {
    navigationBar.style.display = "none";
});

openButton.addEventListener("click", () => {
    openButton.style.display = "none";
    navigationBar.style.display = "block";
})

closeButton.addEventListener("click", () => {
    navigationBar.style.display = "none";
    openButton.style.display = "block";
})