import "./cyberpunkButton.css";
import { Link } from "react-router-dom";
import { authContext } from "../Auth Provider/AuthContext.jsx";
import { useContext } from "react";
export const Navbar = () => {
  const { user, SingOut } = useContext(authContext);
  console.log(user?.photoURL);
  const hanldeSignOut = () => {
    SingOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className={"bg-[#000000] flex justify-between items-center px-14  "}>
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
                "cursor-pointer navLink bg-[#ff003c] text-[#050a0e] font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-4 -mr-5"
              }
            >
              Home
            </button>
          </Link>{" "}
          <Link to={"/addProduct"}>
            <button
              className={
                "cursor-pointer navLink2  bg-[#ff003c] text-[#050a0e] font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-6 -mr-5 "
              }
            >
              Add Product
            </button>
          </Link>{" "}
          <Link to={"/"}>
            <button
              className={
                "cursor-pointer navLink bg-[#ff003c] text-[#050a0e] font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-4"
              }
            >
              Cart
            </button>
          </Link>
        </div>
        <div className={"flex items-center gap-3 "}>
          {user && (
            <div className={"gap-1 flex items-center"}>
              <p
                className={
                  "text-[#050a0e] userName bg-[#ff003c] h-[55px] flex justify-center items-center font-bold text-[0.85rem] fontButton uppercase px-4  "
                }
              >
                {user?.displayName}
              </p>
              <div className={"flex items-center"}>
                <div
                  className={
                    "text-[#050a0e] userProfile bg-[#ff003c] w-[55px] h-[55px] flex justify-center items-center font-bold text-[0.85rem] fontButton uppercase p-2 "
                  }
                >
                  <img
                    className={"w-full rounded-full h-full "}
                    src={user?.photoURL}
                    alt="No image"
                  />
                </div>
              </div>
            </div>
          )}
          {user ? (
            <button className="btn btn--secondary" onClick={hanldeSignOut}>
              <span className="btn__content ">Log Out</span>
              <span className="btn__glitch"></span>
              <span className="btn__label"></span>
            </button>
          ) : (
            <Link to={"/register"}>
              <button className="btn btn--secondary">
                <span className="btn__content ">Join Now</span>
                <span className="btn__glitch"></span>
                <span className="btn__label"></span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
