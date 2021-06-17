let toning = document.querySelector('#toning'),
    color = document.querySelector('#color'),
    glassInput = document.querySelectorAll('.glass__input'),
    colorInput = document.querySelector('.glass__color'),
    toningInput = document.querySelector('.glass__toning');

for(let i = 0; i < glassInput.length; i++) {
    glassInput[i].addEventListener("click", () => {
        if (toningInput.style.display === "none") {
            colorInput.style.display = "none"
        } else {
            toningInput.style.display = "none"
        }
    })
}
color.addEventListener("click", () => {
    colorInput.style.display = "block"
})
toning.addEventListener("click", () => {
    toningInput.style.display = "block"
})