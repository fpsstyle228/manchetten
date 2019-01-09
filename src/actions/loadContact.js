export function loadContact(action){
    return {
        type: "LOAD_CONTACT_INFORMATION",
        payload: action
    }
}

export function loadDefaultContact() {
    return {
        type: "LOAD_DEFAULT_CONTACT"
    }
}
