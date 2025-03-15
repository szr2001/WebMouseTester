import './Mouse.css'
import React, { useEffect, useState } from "react";
import mouseImg from '../../assets/mouse.png'

function Mouse() {

    const [leftClicks, setLeftClicks] = useState(0);
    const [leftDoubleClicks, setLeftDoubleClicks] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.button);
    };

    return (
        <div className="mouse-holder" onMouseDown = {handleClick}>
          <img className="mouse-img" src={mouseImg}/>
            <svg className="mouse-overlay" height="500" width="500">
                <polygon className="mouse-button" id="leftClick" points="57,303,130,231,129,33,58,80"/>
                <polygon className="mouse-error" id="rightClick" points="257,33,330,79,330,304,257,232"/>
                <polygon className="mouse-success" id="thumb1Click" points="24,228,42,228,42,179,25,179"/>
                <polygon className="mouse-button" id="middleClick" points="160,237,226,237,226,266,160,266"/>
                <polygon className="mouse-button" id="thumb2Click" points="41,324,42,273,24,274,24,324"/>
          </svg> 
      </div>
  );
}

export default Mouse;