import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import Purchase from "./Components/Purchase";
import Overlay from "./Components/Overlay";
import "./App.css";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="App">
      <div
        className="main-body"
        style={{ opacity: overlayActive === true ? "30%" : "" }}
      >
        <Navbar windowWidth={windowWidth} cartQuantity={cartQuantity} />
        <Gallery
          windowWidth={windowWidth}
          overlayActive={overlayActive}
          setOverlayActive={setOverlayActive}
        />
        <Description />
        <Purchase
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
      </div>
      {overlayActive === false ? <></> : <Overlay />}
    </div>
  );
}

export default App;
