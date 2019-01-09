
export function loadRecord(action){
    return {
        type: "LOAD_RECORD_INFORMATION",
        payload: action
    }
}

export function loadDefaultRecord() {
    return {
        type: "LOAD_DEFAULT_RECORD"
    }
}
