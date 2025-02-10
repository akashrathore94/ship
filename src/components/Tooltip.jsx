import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { add, remove } from "../redux/slices/finder";

const TooltipContainer = styled.div`
  padding: 5px;
  position: absolute;
  border: 1px solid #4f4f4e;
  border-radius: 10px;
  width: 200px;
  font-size: 14px;
  background: #242527;
`;

const NewFolderContainer = styled.div`
  padding: 8px 10px;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 5px;

  &: hover {
    background-color: #3498db;
    borderradius: 5px;
  }
`;

const BorderDiv = styled.div`
  border-bottom: 1px solid #4f4f4e;
  margin: 5px 0;
`;

const OtherDiv = styled.div`
  padding: 8px 10px;
`;

function Tooltip({ yCord, xCord, setTooltip, removeTooltip }) {
  const dispatch = useDispatch();

  const tooltipRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setTooltip(null);
      }
    },
    [setTooltip]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <TooltipContainer
      ref={tooltipRef}
      style={{ top: yCord, left: xCord }}
      onClick={() => setTooltip(null)}
    >
      {removeTooltip !== 0 ? (
        <NewFolderContainer
          onClick={() => {
            setTooltip(null);
            dispatch(remove(removeTooltip));
          }}
        >
          Remove
        </NewFolderContainer>
      ) : (
        <NewFolderContainer
          onClick={() => {
            setTooltip(null);
            dispatch(add());
          }}
        >
          New Folder
        </NewFolderContainer>
      )}

      <BorderDiv />

      <OtherDiv>Get Info</OtherDiv>

      <BorderDiv />

      <OtherDiv>View</OtherDiv>
      <OtherDiv>Sort by</OtherDiv>
      <OtherDiv>Use Groups</OtherDiv>
    </TooltipContainer>
  );
}

export default Tooltip;
