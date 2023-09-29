import { useState } from "react";
import { ShadowRoot } from "./ShadowRoot";
function App() {
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState("red");
  const handleClick = () => {
    setBg("green");
    setShow(!show);
  };
  return (
    //If isolation is required, use ShadowRoot HOC
    // <ShadowRoot>
    <div className="App">
      {show && (
        <iframe
          src="https://www.w3schools.com"
          title="W3Schools Free Online Web Tutorials"
          style={{ height: "300px" }}
        ></iframe>
      )}

      <header>
        <button
          onClick={handleClick}
          style={{
            background: bg,
            minHeight: "50px",
            minWidth: "50px",
            maxHeight: "50px",
            maxWidth: "50px",
            borderRadius: "50%",
          }}
        >
          Open
        </button>
      </header>
    </div>
    // </ShadowRoot>
  );
}

export default App;
