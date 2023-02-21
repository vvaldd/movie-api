import {darkMode} from "../../config";

const initialState = {
    // checking mode from localstorage if falsey (e.g. 0, null, undefined, etc.) it will be false, otherwise true
    isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case darkMode:
            return {
                ...state,
                // getting value from the action file and changing isdarkMode State.
                isdarkMode: action.payload,
            };
        default:
            return state;
    }
};

export {darkModeReducer};