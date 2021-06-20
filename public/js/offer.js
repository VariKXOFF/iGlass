let container = document.querySelector('.offer__container')
let classElement = "offer__element"
let classTextOffer = "offer__textOffer"
let classTextOrder = "offer__textOrder"
let summa = document.querySelector('.offer__summa')
let payment = document.querySelector('.payment')


let offerText = ['Сумма: ', 'Ширина: ', 'Процент тонировки: ', 'Дополнительная обработка: ', 'Формат стекла: ', 'Толщина: ', 'Цвет: ', 'Вид стекла: ', 'Высота: ']



for(let i = 0; i < localStorage.length; i++) {

    let key = localStorage.key(i)
    container.innerHTML += `<div class="${classElement}"><p class="${classTextOffer}">${offerText[i]}</p><p class="${classTextOrder}">${localStorage.getItem(key)}</p></div>`

    let blockElement = document.querySelectorAll(`.${classElement}`)
    for(let j = 0; j < blockElement.length; j++){
        const checkName = (eng, rus) => {
            if(blockElement[j].lastElementChild.innerHTML === eng){
                blockElement[j].lastElementChild.innerHTML = rus
            }
        }

        if(blockElement[j].lastElementChild.innerHTML === "#ffffff") {
            blockElement[j].style.display = "none"
        }
        if(blockElement[j].lastElementChild.innerHTML === "0") {
            blockElement[j].style.display = "none"
        }
        checkName("tempered", "Закаленное стекло")
        checkName("transparent", "Прозрачное стекло")
        checkName("triplex", "Триплекс стекло")
        checkName("stemalitis", "Стекло Стемалит")
        checkName("bent", "Гнутое стекло")
        checkName("stained", "Витражное стекло")
        checkName("armored", "Бронированное стекло")
        checkName("matt", "Матовое стекло")
        checkName("fire", "Противопожарное стекло")
        checkName("two-layer", "Двухслойное стекло")
        checkName("colored", "Цветное стекло")
        checkName("toning", "Тонированное стеклое")
        checkName("square", "Прямоугольное")
        checkName("figure", "Фигура")
        checkName("circle", "Круглое")
        checkName("null", "Без обработки")
        checkName("polishing", "Полировка")
        checkName("grinding", "Шлифовка")
        if(blockElement[j].firstElementChild.innerHTML === "Сумма: "){
            summa.innerHTML = blockElement[j].lastElementChild.innerHTML + "р."
            blockElement[j].style.display = "none"
        }
    }
}

let elementOffer = document.querySelectorAll(`.${classTextOffer}`)
let elementOrder = document.querySelectorAll(`.${classTextOrder}`)
let arrayOffer = []

for(let i = 0; i < elementOffer.length; i++){
    arrayOffer.unshift(elementOffer[i].innerHTML + elementOrder[i].innerHTML)
}

let amount = localStorage.getItem(localStorage.key(0))

let pay = function () {
    let widget = new cp.CloudPayments();
    widget.pay('auth', // или 'charge'
        { //options
            publicId: 'test_api_00000000000000000000001',
            description: 'Оплата товаров в iglass-ithub.herokuapp.com',
            amount: +amount , //сумма
            currency: 'RUB', //валюта
            skin: "modern"
        })
}
payment.addEventListener("click", pay)