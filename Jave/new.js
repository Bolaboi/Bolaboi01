gsap.from(".calculator",{
    x: 200,
    duration:.4, 
})
let inputElement = document.getElementById("display");
let buttonSeven = document.getElementById("seven")
let buttonclear = document.getElementById("clear")


buttonSeven.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonSeven.textContent
})
//console.log(buttonSeven)

let buttonOne = document.getElementById("one")
buttonOne.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonOne.textContent
})


let buttonTwo = document.getElementById("two")
buttonTwo.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonTwo.textContent
})


let buttonThree = document.getElementById("three")
buttonThree.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonThree.textContent
})


let buttonFour = document.getElementById("four")
buttonFour.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonFour.textContent
})

buttonclear.addEventListener("click", function () {
    inputElement.value = ""
})

let buttonFive = document.getElementById("five")
buttonFive.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonFive.textContent
})

let buttonSix = document.getElementById("six")
buttonSix.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonSix.textContent
})

let buttonEight = document.getElementById("eight")
buttonEight.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonEight.textContent
})

let buttonNine = document.getElementById("nine")
buttonNine.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonNine.textContent
})

let buttonZero = document.getElementById("zero")
buttonZero.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonZero.textContent
})


let buttonDivide = document.getElementById("divide")
let buttonMuiltiply = document.getElementById("multiply")
buttonMuiltiply.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonMuiltiply.textContent
})



let buttonEquals = document.getElementById("equals")
buttonDivide.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonDivide.textContent
})


let buttonSubtract = document.getElementById("subtract")
buttonSubtract.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonSubtract.textContent
})

let buttonAdd = document.getElementById("add")
buttonAdd.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonAdd.textContent
})   

let delButton = document.getElementById("delete");
delButton.addEventListener("click", function(){
    inputElement.value = inputElement.value.slice(0, -1)
})

let buttonDecimal = document.getElementById("decimal")
buttonDecimal.addEventListener("click", function () {
    inputElement.value = inputElement.value + buttonDecimal.textContent
})

let equalSign = document.getElementById("equals")
equalSign.addEventListener("click", function() {
let finalResult = eval(display.value)
display.value = finalResult
})