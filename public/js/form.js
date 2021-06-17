let toning = document.querySelector('#toning'),
    color = document.querySelector('#color'),
    glassInput = document.querySelectorAll('.glass__input'),
    colorInput = document.querySelector('.glass__color'),
    toningInput = document.querySelector('.glass__toning'),
    glass = document.querySelector('.glass'),
    glassSize = document.querySelector('.glass-size'),
    glassAdditive = document.querySelector('.glass-additive'),
    next = document.querySelectorAll('.next'),
    submit = document.querySelector('.submit');

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

for(let i = 0; i < next.length; i++) {
    if(i === 0) {
        next[0].addEventListener("click", () => {
            glass.style.display = "none"
            glassSize.style.display = "flex"
        })
    } else {
        next[1].addEventListener("click", () => {
            glassSize.style.display = "none"
            glassAdditive.style.display = "flex"
        })
    }
}