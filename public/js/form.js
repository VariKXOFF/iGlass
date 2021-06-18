let glassInput = document.querySelectorAll('.glass__input'),
    colorBlock = document.querySelector('.glass__color'),
    toningBlock = document.querySelector('.glass__toning'),
    toningInput = document.querySelector('.glass__toning-input')
    glass = document.querySelector('.glass'),
    glassSize = document.querySelector('.glass-size'),
    glassAdditive = document.querySelector('.glass-additive'),
    next = document.querySelectorAll('.next'),
    submit = document.querySelector('.submit'),
    select = document.querySelector('.glass__select'),
    back = document.querySelectorAll('.back'),
    summa = document.querySelector('.summa__input');

select.addEventListener("change", e => {
    if(select.value === "colored") {
        colorBlock.style.display = "flex"
        if(summa.value === 1000) {
            summa.value = +summa.value + 2000
        } else {
            summa.value = 1000
            summa.value = +summa.value + 2000
        }
        if (toningBlock.style.display === "flex") {
            toningBlock.style.display = "none"
        }
    } else if (select.value === "toning") {
        toningBlock.style.display = "flex"
        toningInput.value = 1
        if(summa.value === 1000) {
            summa.value = +summa.value + 1500
        } else {
            summa.value = 1000
            summa.value = +summa.value + 1500
        }
        if (colorBlock.style.display === "flex") {
            colorBlock.style.display = "none"
        }
    } else {
        colorBlock.style.display = "none"
        toningBlock.style.display = "none"
        if(summa.value === 1000) {
            summa.value = +summa.value + 3000
        } else {
            summa.value = 1000
            summa.value = +summa.value + 3000
        }
    }
})

toningInput.addEventListener("change", e => {
    if(toningInput.value > 100) {
        toningInput.value = 100
    }
    if(toningInput.value < 0) {
        toningInput.value = 0
    }
    if(summa.value !== 2500) {
        summa.value = 2500
        summa.value = +summa.value + (+toningInput.value * 8)
    } else {
        summa.value = +summa.value + (+toningInput.value * 8)
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