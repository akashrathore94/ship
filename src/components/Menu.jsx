import styled from "styled-components";

const MenuContainer = styled.div`
  background: #272b2e;
  padding: 10px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

function Menu({ list }) {
  return (
    <MenuContainer>
      <div style={{ color: "#696a6b", fontSize: "12px", marginBottom: "10px" }}>
        {" "}
        {list.title}
      </div>
      <div>
        {list.list.map((el, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "5px",

              ...(list.title === "Favourites" &&
                i === list.list.length - 1 && { backgroundColor: "#414243" }),
            }}
          >
            {list.title !== "Tags" ? (
              <span
                style={{ width: "15px", marginRight: "5px", display: "flex" }}
                dangerouslySetInnerHTML={{ __html: el[0] }}
              />
            ) : (
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "15px",
                  background: el[1],
                  marginRight: "5px",
                }}
              ></span>
            )}
            <span style={{ color: "#fff" }}>{el[1]}</span>
          </div>
        ))}
      </div>
    </MenuContainer>
  );
}

export default Menu;
