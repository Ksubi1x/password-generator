// Password generator

// Have user input desired length, if symbols wanted, and if numbers are wanted, uppercase, and lowercase letters


let password = []
let pwLength = 4
let symbols = ['!','@','#','$','%','^','&','*']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let randomVal

function getRandom(max) {
    randomVal = Math.floor(Math.random() * max)
}

let numbersT = true 

let lowercaseT = true

let uppercaseT = true

let symbolT = true

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

function setPassword() {
    for (let index = 0; index < pwLength; index++) {
        genPassword()
    }

    console.log('Your password: ' + password.join('').slice(0, pwLength))
}

setPassword()

