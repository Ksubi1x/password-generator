// Password generator

// Have user input desired length, if symbols wanted, and if numbers are wanted, uppercase, and lowercase letters

let lengthBox = document.getElementById('length')

let genButton = document.getElementById('generate')

let errorText = document.getElementById('error')

let pwLength 

let pwElement = document.getElementById('finalPW')

function getInput() {
    if (isNaN(lengthBox.value)) {
        console.log('Please enter a number.')
        errorText.style.display = 'contents'
    }
    else {
        console.log('Password length: ' + lengthBox.value)
        pwLength = lengthBox.value
        errorText.style.display = 'none'
    }
}

// 

let password = []
let symbols = ['!','@','#','$','%','^','&','*']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let randomVal

function getRandom(max) {
    randomVal = Math.floor(Math.random() * max)
}

// Numbers

let numbersT

function setNum() {
    let numberBox = document.getElementById('numbers').checked
    if (numberBox == true) {
        numbersT = true
        console.log('Wants numbers? ' + numbersT)
    }
    else {
        numbersT = false
    }
    
}

// Lowercase

let lowercaseT

function setLower() {

    let lowerBox = document.getElementById('lower').checked
    if (lowerBox == true) {
        lowercaseT = true
        console.log('Wants lowercase? ' + lowercaseT)
    }
    else {
        lowercaseT = false
    }
    
}

// Uppercase

let uppercaseT
function setUpper() {
    let upperBox = document.getElementById('upper').checked

    if (upperBox == true) {
        uppercaseT = true
        console.log('Wants uppercase? ' + uppercaseT)
    }
    else {
    uppercaseT = false

    }
}

// Symbols

let symbolT

function setSymbol(){

    let symbolBox = document.getElementById('symbols').checked
    if (symbolBox == true) {
        symbolT = true
        console.log('Wants symbols? ' + symbolT)
    }
    else {
    symbolT = false
    }
}

// Gen digit functions

function genUpper() {

    if (uppercaseT === true) {
        getRandom(uppercase.length)
        password.push(uppercase[randomVal])
    }

}

function genLower() {
    if (lowercaseT === true) {
        getRandom(lowercase.length)
        password.push(lowercase[randomVal])
    }
}
   
function genNumber() {
    if (numbersT === true) {
        getRandom(numbers.length)
        password.push(numbers[randomVal])
    }
}

function genSymbol() {
    if (symbolT === true) {
        getRandom(symbols.length)
        password.push(symbols[randomVal])
    }
}

function genPassword () {
    genLower()
    genUpper()
    genNumber()
    genSymbol()
}

function checkOptions() {
    setNum()
    setLower()
    setSymbol()
    setUpper()
    setPassword()
}

function setPassword() {

    for (let index = 0; index < pwLength; index++) {
        genPassword()

        if (index == pwLength) {
            return
        }
    }
    console.log('Your password: ' + password.join('').slice(0, pwLength))
    pwElement.innerText = password.join('').slice(0, pwLength)

}





