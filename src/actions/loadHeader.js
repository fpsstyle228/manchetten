
export function loadHeader(action){
    return {
        type: "LOAD_HEAD_INFORMATION",
        payload: action
    }
}

export function loadDefaultHeader() {
    return {
        type: "LOAD_DEFAULT_HEADER"
    }
}
