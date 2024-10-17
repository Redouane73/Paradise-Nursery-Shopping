import { useState } from "react";
import AboutUs from "./Components/AboutUs";
import ProductList from "./Components/ProductList";
import "./App.css";

function App() {
  const [showProductListing, setShowProductListing] = useState(false);

  const handleGetStarted = () => {
    setShowProductListing(true);
  };
  return (
    <>
      <header className="app-container">
        <div className="landing-page">
          <div className="left-sec">
            <h1>
              Welcome To <span>Paradise Nursery</span>{" "}
            </h1>
            <div className="green-line"></div>
            <p>Where Green Meets Serenity</p>
            <div className="getstarted-btn">
              <button onClick={handleGetStarted} className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
          <div className="right-sec">
            <AboutUs />
          </div>
        </div>
      </header>
      <div
        className={`product-list-container ${
          showProductListing ? "visible" : ""
        }`}
      >
        <ProductList />
      </div>
    </>
  );
}

export default App;
