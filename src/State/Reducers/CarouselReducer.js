export const CarouselReducer = (
    state = [
        {
            carouselImage: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg",
            carouselTitle: "First Slide",
            carouselDesc: "asdfghjkl"
        },
        {
            carouselImage: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630132824/HTML-Full-Form.jpg",
            carouselTitle: "Second Slide",
            carouselDesc: "asdfghjkl"
        },
    ],
    action
) => {
    if (action.type === "ADD_CAROUSEL") {
        return [...state, action.payload]
    } else return state;
};