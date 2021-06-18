let colorBlock = document.querySelector('.glass__color');
let toningBlock = document.querySelector('.glass__toning');
let toningInput = document.querySelector('.glass__toning-input');
let glass = document.querySelector('.glass');
let glassSize = document.querySelector('.glass-size');
let glassAdditive = document.querySelector('.glass-additive');
let next = document.querySelectorAll('.next');
let submit = document.querySelector('.submit');
let selectGlassSpecies = document.querySelector('.glass__select');
let back = document.querySelectorAll('.back');
let summa = document.querySelector('.summa__input');
let glassSizeInput = document.querySelectorAll('.glass-size__input');
let selectGlassSize = document.querySelector('.glass-size__select')
let selectGlassAdditive = document.querySelector('.glass-additive__select')

let countToningGlobal = 0
let actualSumma = 0


selectGlassSpecies.addEventListener("change", e => {
    if(selectGlassSpecies.value === "colored") {

        if (toningBlock.style.display === "flex") {
            toningBlock.style.display = "none"
            summa.value = +summa.value - 1500
            summa.value = +summa.value - countToningGlobal
            actualSumma = summa.value
        }

        colorBlock.style.display = "flex"
        summa.value = +summa.value + 2500
        actualSumma = summa.value

    } else if (selectGlassSpecies.value === "toning") {


        if (colorBlock.style.display === "flex") {
            colorBlock.style.display = "none"
            summa.value = +summa.value - 2500
            actualSumma = summa.value
        }

        toningBlock.style.display = "flex"
        toningInput.value = 1
        summa.value = +summa.value + 1500
        let countToning = toningInput.value * 8 - 8
        actualSumma = summa.value

        toningInput.addEventListener("change", e => {
            if(toningInput.value > 100) {
                toningInput.value = 100
            }
            if(toningInput.value <= 0) {
                toningInput.value = 1
            }
            summa.value = +summa.value - countToning
            countToningGlobal = 0
            countToning = toningInput.value * 8 - 8;
            summa.value = +summa.value + countToning
            actualSumma = summa.value
            countToningGlobal += countToning
        })
    } else {

        if (colorBlock.style.display === "flex") {
            colorBlock.style.display = "none"
            summa.value = +summa.value - 2500
            actualSumma = summa.value
        }

        if (toningBlock.style.display === "flex") {
            toningBlock.style.display = "none"
            summa.value = +summa.value - 1500
            summa.value = +summa.value - countToningGlobal
            toningInput.value = 1
            actualSumma = summa.value
        }
    }
})

for(let i = 0; i < glassSizeInput.length; i++){
    if(i === 0){
        let countWeight = glassSizeInput[i].value * 8 - 24
        glassSizeInput[i].addEventListener("change", e => {
            if(glassSizeInput[i].value < 3){
                glassSizeInput[i].value = 3
            }
            if(glassSizeInput[i].value > 20){
                glassSizeInput[i].value = 20
            }
            summa.value = +summa.value - countWeight
            countWeight = glassSizeInput[i].value * 8 - 24;
            summa.value = +summa.value + countWeight
            actualSumma = summa.value
        })
    } else if (i === 1) {
        let countWidth = glassSizeInput[i].value * 8 - 960
        glassSizeInput[i].addEventListener("change", e => {
            if(glassSizeInput[i].value < 120){
                glassSizeInput[i].value = 120
            }
            if(glassSizeInput[i].value > 3200){
                glassSizeInput[i].value = 3200
            }
            summa.value = +summa.value - countWidth
            countWidth = glassSizeInput[i].value * 8 - 960;
            summa.value = +summa.value + countWidth
            actualSumma = summa.value
        })
    } else {
        let countHeight = glassSizeInput[i].value * 8 - 960
        glassSizeInput[i].addEventListener("change", e => {
            if(glassSizeInput[i].value < 120){
                glassSizeInput[i].value = 120
            }
            if(glassSizeInput[i].value > 3200){
                glassSizeInput[i].value = 3200
            }
            summa.value = +summa.value - countHeight
            countHeight = glassSizeInput[i].value * 8 - 960;
            summa.value = +summa.value + countHeight
            actualSumma = summa.value
        })
    }
}

selectGlassSize.addEventListener("change", e => {
    if(selectGlassSize.value === "figure"){
        if(summa.value !== actualSumma){
            summa.value = actualSumma
            summa.value = +summa.value + 2500
        } else {
            summa.value = +summa.value + 2500
        }
    } else if (selectGlassSize.value === "circle"){
        if(summa.value !== actualSumma){
            summa.value = actualSumma
            summa.value = +summa.value + 2000
        } else {
            summa.value = +summa.value + 2000
        }
    } else {
        if(summa.value !== actualSumma) {
            summa.value = actualSumma
        }
    }
})

selectGlassAdditive.addEventListener("change", e => {
    if(selectGlassAdditive.value === "polishing") {
        if(summa.value !== actualSumma) {
            summa.value = actualSumma
            summa.value = +summa.value + 10000
        } else {
            summa.value = +summa.value + 10000
        }
    } else if (selectGlassAdditive.value === "grinding") {
        if(summa.value !== actualSumma) {
            summa.value = actualSumma
            summa.value = +summa.value + 5000
        } else {
            summa.value = +summa.value + 5000
        }
    } else {
        if(summa.value !== actualSumma) {
            summa.value = actualSumma
        }
    }
})

for(let i = 0; i < next.length; i++) {
    if(i === 0) {
        next[0].addEventListener("click", () => {
            glass.style.display = "none"
            glassSize.style.display = "flex"
            actualSumma = summa.value

        })
        back[0].addEventListener("click", () => {
            glass.style.display = "flex"
            glassSize.style.display = "none"
            actualSumma = summa.value
        })
    } else {
        next[1].addEventListener("click", () => {
            glassSize.style.display = "none"
            glassAdditive.style.display = "flex"
            actualSumma = summa.value
        })
        back[1].addEventListener("click", () => {
            glassSize.style.display = "flex"
            glassAdditive.style.display = "none"
            actualSumma = summa.value
        })
    }
}