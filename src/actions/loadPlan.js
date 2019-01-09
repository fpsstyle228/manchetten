
export function loadPlan(action){
    return {
        type: "LOAD_PLAN_INFORMATION",
        payload: action
    }
}

export function loadDefaultHeader() {
    return {
        type: "LOAD_DEFAULT_PLAN"
    }
}
