import './Mouse.css'
import React, { useEffect, useState } from "react";
import mouseImg from '../../assets/mouse.png'
function Mouse() {
    const [count, setCount] = useState(0);
  return (
      <div className="mouse-holder">
          <img className="mouse-img" src={mouseImg}/>
            <svg height="260" width="500">
              <polygon id="leftClick" points="57,303,130,228,129,33,58,80" fill="lime"/>
              <polygon id="rightClick" points="257,33,330,79,330,304,258,232" fill="lime" />
              <polygon id="thumb1Click" points="25,228,42,228,42,179,25,180" fill="lime" />
              <polygon id="middleClick" points="161,239,224,239,224,265,160,265" fill="lime" />
          </svg> 
      </div>
  );
}

export default Mouse;