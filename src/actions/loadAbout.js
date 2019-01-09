export function loadAbout(action){
    return {
        type: "LOAD_ABOUT_INFORMATION",
        payload: action
    }
}

export function loadDefaultAbout() {
    return {
        type: "LOAD_DEFAULT_ABOUT"
    }
}
