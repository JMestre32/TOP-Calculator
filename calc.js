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