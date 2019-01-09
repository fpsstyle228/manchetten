
export function loadSecondContact(action){
    return {
        type: "LOAD_SECOND_CONTACT_INFORMATION",
        payload: action
    }
}

export function loadDefaultSecondContact() {
    return {
        type: "LOAD_DEFAULT_SECOND_CONTACT"
    }
}
