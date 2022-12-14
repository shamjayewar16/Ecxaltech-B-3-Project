export const NavigationReducer = (
    state = [{ name: "khwaja", link: "http://www.google.com", target: "_blank" }],
    action
) => {
    if (action.type === "ADD_LINK") {
        return [...state, action.data]
    }
    else return state;
}