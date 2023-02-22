import {darkMode} from "../../../config";

 const handledarkMode = (e) => async (dispatch) => {
    localStorage.setItem("darkmode", e);

    dispatch({
        type: darkMode,
        payload: e,
    });
};

export {handledarkMode};