import { useEffect, useState } from "react";

const Space = (props) => {
  const { children , stopTheGame, setStopTheGame} = props;
  const [ score, setScore] = useState(0);

  useEffect(() => {
    let interval;
    if(!stopTheGame){
      interval = setInterval(() => setScore(prevState => prevState + 1), 100);
    }
    return () => clearInterval(interval);
  },[stopTheGame])

  return (
    <div>
      <div>{`Score : ${score}`}</div>
    <svg width="400" height="450">
      <g>
        <rect
          width="100%"
          height="100%"
          style={{
            fill: "rgb(0,0,255)",
            strokeWidth: "3",
            stroke: "rgb(0,0,0)",
          }}
        ></rect>
        {children}
      </g>
      Sorry, your browser does not support inline SVG
    </svg>
    </div>
  );
};

export default Space;
