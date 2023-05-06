import { useEffect, useState } from "react";
import { WALL_DROPPING_VELOCITY } from "../config/constants";

const initialWallData = [
  "0,20,210,20,210,40,0,40",
  "400,20,300,20,300,40,400,40",
];

const CollidingWalls = () => {
  const [walls, setWalls] = useState([initialWallData]);
  const [timerCount, setTimerCount] = useState(0);

  console.log("------walls------", walls);

  useEffect(() => {
    const interval = setInterval(() => {
      const shiftedWalls = walls.map((item) => {
        const splitPoints = item.map((ele) => {
          return ele
            .split(",")
            .map((val, idx) => {
              if (idx % 2 !== 0) {
                return Number(val) + 20; //WALL_DROPPING_VELOCITY
              }
              return val;
            })
            .join(",");
        });
        return splitPoints;
      });

      const randomTimerCount = Math.floor(Math.random() * 6) + 3;
      if (timerCount === randomTimerCount) {
        //need a new wall logic here
        const rndInt = Math.floor(Math.random() * 250) + 1;
        const widthOfGap = 50;
        const newWall = [
          `0,20,${rndInt},20,${rndInt},40,0,40`,
          `400,20,${rndInt + widthOfGap},20,${rndInt + widthOfGap},40,400,40`,
        ];
        setTimerCount(0);
        setWalls([
          ...shiftedWalls,
          newWall,
        ]);
      } else {
        if (timerCount >= 8) {
          setTimerCount(0);
        }
        setTimerCount((prevVal) => prevVal + 1);
        setWalls([...shiftedWalls.filter((item) => item[0].split(",")[1] < 450)]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [walls, timerCount]);

  return walls.map((wallPath) => (
    <g key={`${wallPath[0]}-${wallPath[1]}`}>
      <polygon
        points={wallPath[0]}
        style={{ fill: "lime", stroke: "purple", strokeWidth: "1" }}
      />
      <polygon
        points={wallPath[1]}
        style={{ fill: "lime", stroke: "purple", strokeWidth: "1" }}
      />
    </g>
  ));
};

export default CollidingWalls;
