import {darkMode} from "../../../config";

const initialState = {
    isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case darkMode:
            return {
                ...state,
                isdarkMode: action.payload,
            };
        default:
            return state;
    }
};

export {darkModeReducer};