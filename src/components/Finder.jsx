import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActive, removeActive } from "../redux/slices/finder";

import styled from "styled-components";

import Tooltip from "./Tooltip";
import Folder from "./Folder";

const FinderContainer = styled.div`
  padding: 40px 30px;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: start;
`;

function Finder() {
  const state = useSelector((state) => state.finder);
  const dispatch = useDispatch();

  const [tooltip, setTooltip] = useState(null);
  const [removeTooltip, setRemoveTooltip] = useState(null);

  function handleRightClick(e) {
    e.preventDefault();

    setTooltip({
      x: e.clientX,
      y: e.clientY,
    });
    setRemoveTooltip(0);
  }

  function handleChildRightClick(e, el) {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addActive(el.id));

    setRemoveTooltip(el.id);
    setTooltip({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handleClick(e) {
    if (!e.target.closest(".folder")) dispatch(removeActive());
  }

  return (
    <FinderContainer onContextMenu={handleRightClick} onClick={handleClick}>
      {state.map((el) => (
        <Folder
          key={el.id}
          el={el}
          handleChildRightClick={handleChildRightClick}
        />
      ))}

      {tooltip && (
        <Tooltip
          yCord={tooltip.y}
          xCord={tooltip.x}
          setTooltip={setTooltip}
          removeTooltip={removeTooltip}
        />
      )}
    </FinderContainer>
  );
}

export default Finder;
