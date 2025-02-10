import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  padding: 5px;
  position: absolute;
  border: 1px solid #4f4f4e;
  border-radius: 10px;
  width: 200px;
  font-size: 14px;
`;

function Tooltip({ yCord, xCord, setTooltip }) {
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
      className="absolute bg-white shadow-md border rounded p-2"
      style={{ top: yCord, left: xCord }}
    >
      <div
        style={{
          padding: "8px 10px",
          cursor: "pointer",
          marginBottom: "5px",
          borderRadius: "5px",
        }}
      >
        New Folder
      </div>
      <div style={{ borderBottom: "1px solid #4f4f4e", margin: "5px 0" }}></div>
      <div
        style={{
          padding: "8px 10px",
          marginBottom: "5px",
          borderRadius: "5px",
        }}
      >
        Get Info
      </div>
      <div style={{ borderBottom: "1px solid #4f4f4e", margin: "5px 0" }}></div>
      <div
        style={{
          padding: "8px 10px",
          borderRadius: "5px",
        }}
      >
        View
      </div>

      <div
        style={{
          padding: "8px 10px",
          borderRadius: "5px",
        }}
      >
        Sort by
      </div>

      <div
        style={{
          padding: "8px 10px",
          borderRadius: "5px",
        }}
      >
        Use Groups
      </div>
    </TooltipContainer>
  );
}

export default Tooltip;
