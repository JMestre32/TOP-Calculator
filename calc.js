let called = false;
function operate(left, operand, right){
    if(typeof(left) != "number" || !(typeof(right) === "number")){
        return "not a number bruv"
    }
    else if(operand === "+"){
        called = true
        return left + right
    }
    else if (operand === "-"){
        called = true
        return left - right
    }
    else if (operand === "*"){
        called = true
        return left * right
    }
    else if (operand === "/")
    {
        if(right === 0){

            return "no."
        }
        else{
            if((left/right) % 1 != 1){
                console.log("here")
                called = true
                return Math.round((left/right)*100)/100
            }
            else{
                called = true
                return left/right
            }
        }
    }
}



const display = document.querySelector(".display")

// Number event listeners
const zero = document.querySelector("#zero")
zero.onclick = () => {
    if(display.textContent === ""){
        return
    }
    else{
        display.textContent = display.textContent.concat(zero.textContent)
    }
    
}
const one = document.querySelector("#one")
one.onclick = () => display.textContent = display.textContent.concat(one.textContent)
const two = document.querySelector("#two")
two.onclick = () => display.textContent = display.textContent.concat(two.textContent)
const three = document.querySelector("#three")
three.onclick = () => display.textContent = display.textContent.concat(three.textContent)
const four = document.querySelector("#four")
four.onclick = () => display.textContent = display.textContent.concat(four.textContent)
const five = document.querySelector("#five")
five.onclick = () => display.textContent = display.textContent.concat(five.textContent)
const six = document.querySelector("#six")
six.onclick = () => display.textContent = display.textContent.concat(six.textContent)
const seven = document.querySelector("#seven")
seven.onclick = () => display.textContent = display.textContent.concat(seven.textContent)
const eight = document.querySelector("#eight")
eight.onclick = () => display.textContent = display.textContent.concat(eight.textContent)
const nine = document.querySelector("#nine")
nine.onclick = () => display.textContent = display.textContent.concat(nine.textContent)
const dot = document.querySelector("#dot")
dot.onclick = () => {
    if(display.textContent.includes(".")){
        return
    }
    else{
        display.textContent = display.textContent.concat(dot.textContent)
    }
    
}


// Operation event listeners
let left = ""
let operation
let right = ""
const addition = document.querySelector("#addition")
const subtraction = document.querySelector("#subtraction")
const division = document.querySelector("#division")
const multiply = document.querySelector("#multiplication")

if(left == ""){
    addition.onclick = () =>{
        operation = "+"
        left = display.textContent
        display.textContent = ""
    }
    subtraction.onclick = () =>{
        operation = "-"
        left = display.textContent
        display.textContent = ""
    }
    multiplication.onclick = () =>{
        operation = "*"
        left = display.textContent
        display.textContent = ""
    }
    division.onclick = () =>{
        operation = "/"
        left = display.textContent
        display.textContent = ""
    }
}

// Misc event listeners (i.e. +/-, backspace, equals)

const equal = document.querySelector("#equal")
const plusMinus = document.querySelector(".plusMinus")
const backSpace = document.querySelector(".backspace")

// Clear event listener
const clear = document.querySelector(".clear")
clear.onclick = () => {
    display.textContent = "";
    left = "";
    right = "";

}



equal.onclick = () => {
    if(left != "" && operation != ""){
        right = display.textContent
        console.log(left)
        console.log(operation)
        console.log("right: " + right)
        
        display.textContent = operate(Number(left), operation, Number(right))
        left = operate(Number(left), operation, Number(right)).toString()
        right = ""
        console.log("right now: " + right)
    }
    else if(display.textContent === "80085") {
        window.open("https://www.youtube.com/watch?v=kvTJyMmadmA", '_blank').focus();
    }
    else{
        alert("left or right operand is not assigned a value")
    }
}

plusMinus.onclick = () => {
    if(display.textContent === ""){
        return
    }
    else if(display.textContent.includes("-")){
        display.textContent = display.textContent.replace('-', '')
    }
    else{
        display.textContent = "-" + display.textContent
    }
}


backSpace.onclick = () => {
    display.textContent = display.textContent.slice(0, -1)
}

