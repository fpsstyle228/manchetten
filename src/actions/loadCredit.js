export function loadCredit(action){
    return {
        type: "LOAD_CREDIT_INFORMATION",
        payload: action
    }
}

export function loadDefaulCredit() {
    return {
        type: "LOAD_DEFAULT_CREDIT"
    }
}
