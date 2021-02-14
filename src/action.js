export function plusOne(){
    return {
        type: "plus"
    }
}

export function minusOne(){
    return {
        type: "minus"
    }
}

export function resetCounter (){
    return {
        type: "reset"
    }
}

export function userNum(number){
    return {
        type: "amount",
        payload: number
    }
}
// action creators