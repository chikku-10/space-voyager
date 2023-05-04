import { useEffect, useState } from "react";

const Space = (props) => {
    const {children} = props;

    const [walls, setWalls] = useState(["0,20,210,20,210,190,0,190", "400,20,400,190,300,190,300,20"]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const shiftedWalls = [...walls].map((item) => {
    //             const splitPoints = item.split(",").map((val,idx) => { 
    //                 if(idx % 2 !== 0){
    //                     return Number(val) + 10;
    //                 }
    //                 return val;
    //             }).join(",");
    //             return splitPoints;
    //         });

    //         console.log("shiftedWalls",shiftedWalls);
    //         setWalls(shiftedWalls);

    //     }, 1000);

    //     return () => clearInterval(interval);
    // },[walls]);

  return (
    <svg width="400" height="450" >
        <g>
        <rect width="100%" height="100%" style={{fill:"rgb(0,0,255)",strokeWidth:"3",stroke:"rgb(0,0,0)"}}>
        </rect>
        {
            walls.map((wallPath) => (
                <polygon key={wallPath} points={wallPath} style={{fill:"lime",stroke:"purple",strokeWidth:"1"}} />
            ))
        }
        {children}
        </g>
        Sorry, your browser does not support inline SVG
    </svg>
  )
}

export default Space;