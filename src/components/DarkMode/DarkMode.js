import {BsMoonStarsFill, BsFillSunFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import "./DarkMode.css";
import {handledarkMode} from "../../redux/reducers";

const DarkMode = () => {

    const dispatch = useDispatch();
    const mode = useSelector((state) => state.darkMode);
    const {isdarkMode} = mode;

    const switchDarkMode = () => {
        isdarkMode
            ? dispatch(handledarkMode(false))
            : dispatch(handledarkMode(true));
    };

    useEffect(() => {
        //changing color of body with darkmode in useEffect
        document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
        document.body.style.color = isdarkMode ? "white" : "black"
    }, [isdarkMode]);

    return (
        <div>
            <div id="darkmode">

                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onChange={switchDarkMode}
                    checked={isdarkMode}
                />

                <label htmlFor="checkbox" className="label">
                    <BsMoonStarsFill color="white"/>
                    <BsFillSunFill color="yellow"/>
                    <div className="ball"></div>
                </label>

            </div>
        </div>
    );
};

export {DarkMode};