function operate(left, operand, right){
    if(typeof(left) != "number" || !(typeof(right) === "number")){
        return "not a number bruv"
    }
    else if(operand === "+"){
        return left + right
    }
    else if (operand === "-"){
        return left - right
    }
    else if (operand === "*"){
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
                return Math.round((left/right)*100)/100
            }
            else{
                return left/right
            }
        }
    }
}



const display = document.querySelector(".display")

const zero = document.querySelector("#zero")
zero.onclick = () => display.textContent = display.textContent.concat(zero.textContent)
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
dot.onclick = () => display.textContent = display.textContent.concat(dot.textContent)


const clear = document.querySelector(".clear")
clear.onclick = () => display.textContent = ""