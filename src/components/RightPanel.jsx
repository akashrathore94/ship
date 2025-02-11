import Finder from "./Finder";

import styled from "styled-components";
import Header from "./Header";

const StyledRightPanel = styled.section`
  min-height: 100vh;
  background: #242527;
  width: 100%;
  color: #fff;
`;

function RightPanel() {
  return (
    <StyledRightPanel>
      <Header></Header>
      <Finder />
    </StyledRightPanel>
  );
}

export default RightPanel;
