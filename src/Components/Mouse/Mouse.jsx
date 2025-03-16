import './Mouse.css'
import React, { useEffect, useReducer, useState } from "react";
import mouseImg from '../../assets/mouse.png'
function Mouse() {

    const initialState = {
        leftClicks: 0,
        leftDoubleClicks: 0,
        rightClicks: 0,
        rightDoubleClicks: 0,
        middleClicks: 0,
        middleDoubleClicks: 0,
        thumb1Clicks: 0,
        thumb1DoubleClicks: 0,
        thumb2Clicks: 0,
        thumb2DoubleClicks: 0,  
    };

    //reducer example
    const reducer = (state, action) => {
        switch (action.type) {
            case "LEFT_CLICK":
                return { ...state, leftClicks: state.leftClicks + 1 };
            case "LEFT_DOUBLE_CLICK":
                return { ...state, leftDoubleClicks: state.leftDoubleClicks + 1 };
            case "RIGHT_CLICK":
                return { ...state, rightClicks: state.rightClicks + 1 };
            case "RIGHT_DOUBLE_CLICK":
                return { ...state, rightDoubleClicks: state.rightDoubleClicks + 1 };
            case "MIDDLE_CLICK":
                return { ...state, middleClicks: state.middleClicks + 1 };
            case "MIDDLE_DOUBLE_CLICK":
                return { ...state, middleDoubleClicks: state.middleDoubleClicks + 1 };
            case "THUMB1_CLICK":
                return { ...state, thumb1Clicks: state.thumb1Clicks + 1 };
            case "THUMB1_DOUBLE_CLICK":
                return { ...state, thumb1DoubleClicks: state.thumb1DoubleClicks + 1 };
            case "THUMB2_CLICK":
                return { ...state, thumb2Clicks: state.thumb2Clicks + 1 };
            case "THUMB2_DOUBLE_CLICK":
                return { ...state, thumb2DoubleClicks: state.thumb2DoubleClicks + 1 };
            default:
                return state;
        }
    };

    const handleClick = (event) => {
        event.preventDefault();
        switch (event.button) {
            case 0:
                dispatch({ type: "LEFT_CLICK" });
                return;
            case 1:
                return;
            case 2:
                dispatch({ type: "RIGHT_CLICK" });
                return;
            case 3:
                return;
            case 4:
                return;
            default:
                return console.log("Button not supported!");
        }
    };
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="mouse-holder" onContextMenu={handleContextMenu} onMouseDown = {handleClick}>
          <img className="mouse-img" src={mouseImg}/>
            <svg className="mouse-overlay" height="500" width="500">
                <polygon className="mouse-button" id="leftClick" points="57,303,130,231,129,33,58,80"/>
                <polygon className="mouse-error" id="rightClick" points="257,33,330,79,330,304,257,232"/>
                <polygon className="mouse-success" id="thumb1Click" points="24,228,42,228,42,179,25,179"/>
                <polygon className="mouse-button" id="middleClick" points="160,237,226,237,226,266,160,266"/>
                <polygon className="mouse-button" id="thumb2Click" points="41,324,42,273,24,274,24,324" />
            </svg> 
            <p className="counter-text">{ state.leftClicks}</p>
        </div>
  );
}

export default Mouse;