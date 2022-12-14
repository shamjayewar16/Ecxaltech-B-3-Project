export const CourseReducer = (state = [
    {
        courseImage: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
        courseTitle: "HTML",
        courseDesc: "Hyper Text Markup Language"
    }
], kuchbhi
) => {
    if (kuchbhi.type === "ADD_COURSES") {
        return [...state, kuchbhi.meriMarzi]
    } else return state;
}