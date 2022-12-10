import React from "react";

const PlaySquare = (props) => {
  return (
    <div>
      <button className="x" onClick={() => props.onClick()}>
        {props.value}
      </button>
    </div>
  );
};

export default PlaySquare;
