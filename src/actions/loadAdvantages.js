export function loadAdvantages(action){
    return {
        type: "LOAD_ADVANTAGES_INFORMATION",
        payload: action
    }
}

export function loadDefaultAdvantages() {
    return {
        type: "LOAD_DEFAULT_ADVANTAGES"
    }
}
