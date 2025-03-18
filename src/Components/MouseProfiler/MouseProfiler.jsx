import './MouseProfiler.css'
import React, { useRef, useReducer } from "react"
import mouseImg from '../../assets/mouse.png'
import { ErrorsCounter } from '../../Components'

let leftClickTime = 500;
let rightClickTime = 500;
let middleClickTime = 500;
let thumb1ClickTime = 500;
let thumb2ClickTime = 500;
function MouseProfiler({ maxCountSize, doubleClickInterval}) {

    const leftClickRef = useRef(null);
    const rightClickRef = useRef(null);
    const middleClickRef = useRef(null);
    const thumb1ClickRef = useRef(null);
    const thumb2ClickRef = useRef(null);

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

    function checkDoubleClick(clickIndex) {

        let now = performance.now();
        switch (clickIndex) {
            case 0:
                let leftClickNow = now;
                if (leftClickNow - leftClickTime < doubleClickInterval) {
                    dispatch({ type: "LEFT_DOUBLE_CLICK" });
                }
                leftClickTime = leftClickNow;
                return;
            case 1:
                let middleClickNow = now;
                if (middleClickNow - middleClickTime < doubleClickInterval) {
                    dispatch({ type: "MIDDLE_DOUBLE_CLICK" });
                }
                middleClickTime = middleClickNow;
                return;
            case 2:
                let rightClickNow = now;
                if (rightClickNow - rightClickTime < doubleClickInterval) {
                    dispatch({ type: "RIGHT_DOUBLE_CLICK" });
                }
                rightClickTime = rightClickNow;
                return;
            case 3:
                let thumb2ClickNow = now;
                if (thumb2ClickNow - thumb2ClickTime < doubleClickInterval) {
                    dispatch({ type: "THUMB2_DOUBLE_CLICK" });
                }
                thumb2ClickTime = thumb2ClickNow;
                return;
            case 4:
                let thumb1ClickNow = now;
                if (thumb1ClickNow - thumb1ClickTime < doubleClickInterval) {
                    dispatch({ type: "THUMB2_DOUBLE_CLICK" });
                }
                thumb1ClickTime = thumb1ClickNow;
                return;
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        checkDoubleClick(event.button);
        switch (event.button) {
            case 0:
                dispatch({ type: "LEFT_CLICK" });
                leftClickRef.current.classList.remove("mouse-button");
                leftClickRef.current.classList.add(state.leftDoubleClicks > 0 ? "mouse-error" : "mouse-success");
                return;
            case 1:
                dispatch({ type: "MIDDLE_CLICK" });
                middleClickRef.current.classList.remove("mouse-button");
                middleClickRef.current.classList.add(state.middleDoubleClicks > 0 ? "mouse-error" : "mouse-success");
                return;
            case 2:
                dispatch({ type: "RIGHT_CLICK" });
                rightClickRef.current.classList.remove("mouse-button");
                rightClickRef.current.classList.add(state.rightDoubleClicks > 0 ? "mouse-error" : "mouse-success");

                return;
            case 3:
                dispatch({ type: "THUMB2_CLICK" });
                thumb2ClickRef.current.classList.remove("mouse-button");
                thumb2ClickRef.current.classList.add(state.thumb2DoubleClicks > 0 ? "mouse-error" : "mouse-success");

                return;
            case 4:
                dispatch({ type: "THUMB1_CLICK" });
                thumb1ClickRef.current.classList.remove("mouse-button");
                thumb1ClickRef.current.classList.add(state.thumb1DoubleClicks > 0 ? "mouse-error" : "mouse-success");

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
                <polygon className="mouse-button" ref={leftClickRef} points="57,303,130,231,129,33,56,79"/>
                <polygon className="mouse-button" ref={rightClickRef} points="257,33,330,79,330,304,257,232"/>
                <polygon className="mouse-button" ref={thumb1ClickRef} points="24,228,42,228,42,179,25,179"/>
                <polygon className="mouse-button" ref={thumb2ClickRef} points="41,324,42,273,24,274,24,324" />
                <polygon className="mouse-button" ref={middleClickRef} points="192,188,204,185,210,177,211,124,205,117,193,114,183,117,177,124,176,176,180,184" />
            </svg> 
            <ErrorsCounter normalCount={state.leftClicks} errorCount={state.leftDoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-left-click"/>
            <ErrorsCounter normalCount={state.rightClicks} errorCount={state.rightDoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-right-click"/>
            <ErrorsCounter normalCount={state.middleClicks} errorCount={state.middleDoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-middle-click"/>
            <ErrorsCounter normalCount={state.thumb1Clicks} errorCount={state.thumb1DoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-thumb1-click"/>
            <ErrorsCounter normalCount={state.thumb2Clicks} errorCount={state.thumb2DoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-thumb2-click"/>
        </div>
  );
}

export default MouseProfiler;