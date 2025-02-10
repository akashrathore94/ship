import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Main>
      <LeftPanel />
      <RightPanel />
    </Main>
  );
}

export default App;
