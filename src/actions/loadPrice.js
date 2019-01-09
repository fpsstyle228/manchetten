
export function loadPrice(action){
    return {
        type: "LOAD_PRICE_INFORMATION",
        payload: action
    }
}

export function loadDefaultPrice() {
    return {
        type: "LOAD_DEFAULT_PRICE"
    }
}
