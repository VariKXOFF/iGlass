let glassInput = document.querySelectorAll('.glass__input'),
    colorInput = document.querySelector('.glass__color'),
    toningInput = document.querySelector('.glass__toning'),
    glass = document.querySelector('.glass'),
    glassSize = document.querySelector('.glass-size'),
    glassAdditive = document.querySelector('.glass-additive'),
    next = document.querySelectorAll('.next'),
    submit = document.querySelector('.submit'),
    select = document.querySelector('.glass__select'),
    back = document.querySelectorAll('.back');

select.addEventListener("change", e => {
    if(select.value === "colored") {
        colorInput.style.display = "flex"
        if (toningInput.style.display === "flex") {
            toningInput.style.display = "none"
        }
    } else if (select.value === "toning") {
        toningInput.style.display = "flex"
        if (colorInput.style.display === "flex") {
            colorInput.style.display = "none"
        }
    } else {
        colorInput.style.display = "none"
        toningInput.style.display = "none"
    }
})

for(let i = 0; i < next.length; i++) {
    if(i === 0) {
        next[0].addEventListener("click", () => {
            glass.style.display = "none"
            glassSize.style.display = "flex"
        })
        back[0].addEventListener("click", () => {
            glass.style.display = "flex"
            glassSize.style.display = "none"
        })
    } else {
        next[1].addEventListener("click", () => {
            glassSize.style.display = "none"
            glassAdditive.style.display = "flex"
        })
        back[1].addEventListener("click", () => {
            glassSize.style.display = "flex"
            glassAdditive.style.display = "none"
        })
    }
}