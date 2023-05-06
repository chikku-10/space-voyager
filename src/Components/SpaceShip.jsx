import { useEffect, useState } from "react";

const SpaceShip = () => {
  const [shipPosition, setShipPosition] = useState("200,440,210,420,220,440");

  useEffect(() => {
    window.addEventListener("keydown", handleMovementOfShip);
  }, []);

  const handleMovementOfShip = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        setShipPosition((prevState) => {
          const xCoords = [];
          prevState.split(",").forEach((val, idx) => {
            if (idx % 2 === 0) xCoords.push(Number(val));
          });

          const minX = Math.min(...xCoords);

          return prevState
            .split(",")
            .map((val, idx) => {
              if (idx % 2 === 0 && minX - 10 >= 0) {
                return Number(val) - 10;
              }
              return val;
            })
            .join(",");
        });
        break;
      case "ArrowRight":
        setShipPosition((prevState) => {
          const xCoords = [];
          prevState.split(",").forEach((val, idx) => {
            if (idx % 2 === 0) xCoords.push(Number(val));
          });
          const maxX = Math.max(...xCoords);
          console.log("maxX", maxX);

          return prevState
            .split(",")
            .map((val, idx) => {
              if (idx % 2 === 0 && maxX + 10 <= 400) {
                return Number(val) + 10;
              }
              return val;
            })
            .join(",");
        });
        break;
      case "ArrowUp":
        setShipPosition((prevState) => {
          const yCoords = [];
          prevState.split(",").forEach((val, idx) => {
            if (idx % 2 !== 0) yCoords.push(Number(val));
          });
          const minY = Math.min(...yCoords);
          return prevState
            .split(",")
            .map((val, idx) => {
              if (idx % 2 !== 0 && minY - 10 >= 0) {
                return Number(val) - 10;
              }
              return val;
            })
            .join(",");
        });
        break;
      case "ArrowDown":
        setShipPosition((prevState) => {
          const yCoords = [];
          prevState.split(",").forEach((val, idx) => {
            if (idx % 2 !== 0) yCoords.push(Number(val));
          });
          const maxY = Math.max(...yCoords);
          return prevState
            .split(",")
            .map((val, idx) => {
              if (idx % 2 !== 0 && maxY + 10 <= 450) {
                return Number(val) + 10;
              }
              return val;
            })
            .join(",");
        });
        break;
      default:
        console.log("No other keys supported");
    }
  };

  return (
    <polygon
      onMouseDown={handleMovementOfShip}
      points={shipPosition}
      style={{ fill: "red", stroke: "purple", strokeWidth: "1" }}
    />
  );
};

export default SpaceShip;
