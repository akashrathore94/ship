import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px 30px;
  display: flex;
  justify-content: space-betwen;
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <div>
          <span style={{ color: "#909193", marginRight: "30px" }}>&lt;</span>
          <span style={{ color: "#353638", marginRight: "20px" }}>&gt;</span>
          <span style={{ cursor: "pointer", fontSize: "14px" }}>Downloads</span>
        </div>
      </div>
      <div></div>
    </StyledHeader>
  );
}

export default Header;
