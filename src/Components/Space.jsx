const Space = (props) => {
  const { children } = props;

  return (
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
  );
};

export default Space;
