import Finder from "./Finder";

import styled from "styled-components";

const StyledRightPanel = styled.section`
  min-height: 100vh;
  background: #242527;
  width: 100%;
  color: #fff;
`;

function RightPanel() {
  return (
    <StyledRightPanel>
      <nav></nav>
      <Finder />
    </StyledRightPanel>
  );
}

export default RightPanel;
