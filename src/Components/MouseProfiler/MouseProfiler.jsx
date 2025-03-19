import './MouseProfiler.css'
import React, { useEffect ,useRef, useReducer } from "react"
import mouseImg from '../../assets/mouse.png'
import { ErrorsCounter } from '../../Components'

let leftClickTime = 500;
let rightClickTime = 500;
let middleClickTime = 500;
function MouseProfiler({ maxCountSize, doubleClickInterval}) {

    const leftClickRef = useRef(null);
    const rightClickRef = useRef(null);
    const middleClickRef = useRef(null);

    const scrollUpRef = useRef(null);
    const scrollDownRef = useRef(null);
    const hasMounted = useRef(false);

    const initialState = {
        leftClicks: 0,
        leftDoubleClicks: 0,
        rightClicks: 0,
        rightDoubleClicks: 0,
        middleClicks: 0,
        middleDoubleClicks: 0,
    };

    const mouseEnterProfiler = (event) => {
        window.addEventListener("wheel", handleWheel, { passive: false });
    }

    const mouseLeavesProfiler = (event) => {
        window.removeEventListener("wheel", handleWheel);
    }

    useEffect(() => {
        if (hasMounted.current === true) {
            mouseEnterProfiler();
        }
        else {
            hasMounted.current = true;
        }
    }, [initialState]);

    const handleWheel = (event) => {
        event.preventDefault();

        if (event.deltaY < 0) {
            scrollUpRef.current.classList.add("mouse-success");
            scrollUpRef.current.classList.add("mouse-accent-success");
            setTimeout(() => scrollUpRef.current.classList.remove("mouse-accent-success"), 200);
        } else {
            scrollDownRef.current.classList.add("mouse-success");
            scrollDownRef.current.classList.add("mouse-accent-success");
            setTimeout(() => scrollDownRef.current.classList.remove("mouse-accent-success"), 200);
        }
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
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
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
        }
    }

    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    const handleClick = (event) => {
        event.preventDefault();
        mouseLeavesProfiler();
        checkDoubleClick(event.button);
        switch (event.button) {
            case 0:
                dispatch({ type: "LEFT_CLICK" });
                leftClickRef.current.classList.remove("mouse-button");
                leftClickRef.current.classList.add(state.leftDoubleClicks > 0 ? "mouse-error" : "mouse-success");
                leftClickRef.current.classList.add(state.leftDoubleClicks > 0 ? "mouse-accent-error" : "mouse-accent-success");
                setTimeout(() => leftClickRef.current.classList.remove(state.leftDoubleClicks > 0 ? "mouse-accent-error" : "mouse-accent-success"), 200);
                return;
            case 1:
                dispatch({ type: "MIDDLE_CLICK" });
                middleClickRef.current.classList.remove("mouse-button");
                middleClickRef.current.classList.add(state.middleDoubleClicks > 0 ? "mouse-error" : "mouse-success");
                middleClickRef.current.classList.add(state.middleDoubleClicks > 0 ? "mouse-accent-error" : "mouse-accent-success");
                setTimeout(() => middleClickRef.current.classList.remove(state.middleDoubleClicks > 0 ? "mouse-accent-error" : "mouse-accent-success"), 200);

                return;
            case 2:
                dispatch({ type: "RIGHT_CLICK" });
                rightClickRef.current.classList.remove("mouse-button");
                rightClickRef.current.classList.add(state.rightDoubleClicks > 0 ? "mouse-error" : "mouse-success");
                rightClickRef.current.classList.add(state.rightDoubleClicks > 0 ? "mouse-accent-error" : "mouse-accent-success");
                setTimeout(() => rightClickRef.current.classList.remove(state.rightDoubleClicks > 0 ? "mouse-accent-error" : "mouse-accent-success"), 200);
                return;
            default:
                return console.log("Button not supported!");
        }
        mouseEnterProfiler();
    };


    return (
        <div className="mouse-holder" onContextMenu={handleContextMenu}
            onMouseDown={handleClick} onMouseEnter={mouseEnterProfiler} onMouseLeave={mouseLeavesProfiler}>
          <img className="mouse-img" src={mouseImg}/>
            <svg className="mouse-overlay" height="500" width="500">
                <polygon className="mouse-button" ref={leftClickRef} points="57,304,131,232,131,32,56,79"/>
                <polygon className="mouse-button" ref={rightClickRef} points="257,33,330,79,330,304,257,232"/>
                <polygon className="mouse-button" ref={middleClickRef} points="192,188,204,185,210,177,211,124,205,117,193,114,183,117,177,124,176,176,180,184" />
                <polygon className="mouse-button" ref={scrollUpRef} points="175,48,210,48,192,17" />
                <polygon className="mouse-button" ref={scrollDownRef} points="192,284,210,253,175,253" />
            </svg> 
            <ErrorsCounter normalCount={state.leftClicks} errorCount={state.leftDoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-anim-1 counter-left-click"/>
            <ErrorsCounter normalCount={state.rightClicks} errorCount={state.rightDoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-anim-1-2 counter-right-click"/>
            <ErrorsCounter normalCount={state.middleClicks} errorCount={state.middleDoubleClicks} maxNumberSpecified={maxCountSize} className="counter counter-anim-0-8 counter-middle-click"/>
        </div>
  );
}

export default MouseProfiler;