import { useDispatch } from "react-redux";
import img from "../assets/image.png";
import { addActive } from "../redux/slices/finder";

function Folder({ el, handleChildRightClick }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(addActive(el.id))}
      className={`folder ${el.active ? "selected" : ""}`}
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
  );
}

export default Folder;
