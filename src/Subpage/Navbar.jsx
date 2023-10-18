import "./cyberpunkButton.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className={"bg-black flex justify-between items-center px-14 "}>
        <div className={"flex  items-center "}>
          <img
            src="https://i.ibb.co/1M5qyPW/Abstract-Breaking-Live-News-Free-Logo.png"
            alt=""
            className={"h-[7.0625rem]"}
          />
          <img
            src="https://i.ibb.co/xFfBMC4/Abstract-Breaking-Live-News-Free-Logo-2.png"
            alt=""
            className={" h-[7.0625rem] -ml-6"}
          />
        </div>
        <div>
          <Link to={"/"}>
            <button
              className={
                "cursor-pointer navLink bg-[#ff003c] text-black font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-4 -mr-5"
              }
            >
              Home
            </button>
          </Link>{" "}
          <Link to={"/"}>
            <button
              className={
                "cursor-pointer navLink2  bg-[#ff003c] text-black font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-6 -mr-5 "
              }
            >
              Add Product
            </button>
          </Link>{" "}
          <Link to={"/"}>
            <button
              className={
                "cursor-pointer navLink bg-[#ff003c] text-black font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-4"
              }
            >
              Cart
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/register"}>
            <button className="btn btn--secondary">
              <span className="btn__content ">Join Now</span>
              <span className="btn__glitch"></span>
              <span className="btn__label"></span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
