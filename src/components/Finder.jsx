import { useDispatch, useSelector } from "react-redux";
import { add, addActive, remove } from "../redux/slices/finder";
import img from "../assets/image.png";

import styled from "styled-components";
import { useState } from "react";
import Tooltip from "./Tooltip";

const FinderContainer = styled.div`
  padding: 40px 30px;
  height: 100%;
`;

function Finder() {
  const state = useSelector((state) => state.finder);
  console.log(state);
  const dispatch = useDispatch();

  const [tooltip, setTooltip] = useState(null);

  function handleRightClick(e) {
    e.preventDefault();
    console.log("parent right click");
    setTooltip({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handleChildRightClick(e, el) {
    e.preventDefault();
    e.stopPropagation();
    console.log(el);
    dispatch(addActive(el.id));
    console.log("child right click");
  }
  return (
    <FinderContainer onContextMenu={handleRightClick}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div
          onClick={() => {
            dispatch(remove(1));
          }}
        >
          Delete
        </div>
        <div
          onClick={() => {
            dispatch(add());
          }}
        >
          Add
        </div>
        {state.map((el, i) => (
          <div
            key={i}
            onClick={() => dispatch(addActive(el.id))}
            className={`${el.active ? "selected" : ""}`}
            onContextMenu={(e) => handleChildRightClick(e, el)}
            style={{ textAlign: "center", width: "100px" }}
          >
            <img
              style={{
                width: "60px",
                padding: "8px 4px",
                borderRadius: "5px",
              }}
              src={img}
            />
            <p style={{ padding: "2px 4px" }}>{el.name}</p>
          </div>
        ))}
      </div>

      {tooltip && (
        <Tooltip yCord={tooltip.y} xCord={tooltip.x} setTooltip={setTooltip} />
      )}
    </FinderContainer>
  );
}

export default Finder;
