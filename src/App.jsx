import "./App.css";
import { Navbar } from "./Subpage/Navbar.jsx";
import { Footer } from "./Subpage/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 4000);
  }, []);
  return (
    <>
      {spinner ? (
        <div
          className={
            "flex bg-[#0C0C0C] h-screen w-screen justify-center items-center "
          }
        >
          <img
            src="https://hackernoon.imgix.net/images/0*apCoiP4a2SAjnYKV.gif"
            alt=""
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
