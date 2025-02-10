import { useDispatch, useSelector } from "react-redux";
import { add, addActive } from "./redux/slices/finder";

function App() {
  const state = useSelector((state) => state.finder);
  console.log(state);
  const dispatch = useDispatch();

  function handleRightClick(e) {
    e.preventDefault();
    console.log("parent right click");
  }

  function handleChildRightClick(e, el) {
    e.preventDefault();
    e.stopPropagation();
    console.log(el);
    dispatch(addActive(el.id));
    console.log("child right click");
  }

  return (
    <>
      <h1
        onClick={() => {
          dispatch(add());
        }}
      >
        test
      </h1>

      <div
        style={{ display: "flex", gap: "20px" }}
        onContextMenu={handleRightClick}
      >
        <div>Delete</div>
        {state.map((el, i) => (
          <div
            key={i}
            onClick={() => dispatch(addActive(el.id))}
            className={`${el.active ? "selected" : ""}`}
            onContextMenu={(e) => handleChildRightClick(e, el)}
            style={{ textAlign: "center" }}
          >
            <img
              style={{
                width: "60px",
                padding: "5px",
                borderRadius: "5px",
              }}
              src={
                "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-1024.png"
              }
            />
            <p style={{ padding: "2px" }}>{el.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
