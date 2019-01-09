export function loadFoot(action){
    return {
        type: "LOAD_FOOT_INFORMATION",
        payload: action
    }
}

export function loadDefaultFoot() {
    return {
        type: "LOAD_DEFAULT_FOOT"
    }
}
