import styled from "styled-components";

const StyledLeftPanel = styled.div`
  min-height: 100vh;
  background: #272b2e;
  width: 250px;
  border-right: 2px solid #1d1e20;
`;

function LeftPanel() {
  return <StyledLeftPanel></StyledLeftPanel>;
}

export default LeftPanel;
