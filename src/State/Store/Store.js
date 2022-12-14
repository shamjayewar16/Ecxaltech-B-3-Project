// import { legacy_createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { FirstReducer } from "../Reducers/FirstReducer";

// export const configureStore = () => {
//     return legacy_createStore(
//         combineReducers({ FirstReducer }),
//         composeWithDevTools()
//     );
// };

// import { legacy_createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { FormOneReducer } from "../Reducers/FormOneReducer";
// import { FormTwoReducer } from "../Reducers/FormTwoReducer";
// import { FormThreeReducer } from "../Reducers/FormThreeReducer";
// export const configureStore = () => {
//     return legacy_createStore(
//         combineReducers({ FormOneReducer, FormTwoReducer, FormThreeReducer }),
//         composeWithDevTools()
//     );
// };
import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { NavigationReducer } from "../Reducers/NavigationReducer";
import { CarouselReducer } from "../Reducers/CarouselReducer";
import { CourseReducer } from "../Reducers/CourseReducer";

export const configureStore = () => {
    return legacy_createStore(
        combineReducers({ NavigationReducer, CourseReducer, CarouselReducer }),
        composeWithDevTools(),
    );
};