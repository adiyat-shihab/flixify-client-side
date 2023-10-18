import "./App.css";
import { Navbar } from "./Subpage/Navbar.jsx";
import { Footer } from "./Subpage/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
