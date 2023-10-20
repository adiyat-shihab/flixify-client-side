import "./cyberpunkButton.css";
import { Link } from "react-router-dom";
import { authContext } from "../Auth Provider/AuthContext.jsx";
import { useContext, useState } from "react";
export const Navbar = () => {
  const { user, SingOut } = useContext(authContext);
  console.log(user?.photoURL);
  const [open, setOpen] = useState(false);
  const hanldeSignOut = () => {
    SingOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        className={
          "bg-[#000000] sticky top-0 z-10  xl:flex justify-between items-center xl:px-14  hidden "
        }
      >
        <Link to={"/"}>
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
        </Link>

        <div className={""}>
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
          <Link to={"/mycart"}>
            <button
              className={
                "cursor-pointer navLink bg-[#ff003c] text-[#050a0e] font-bold text-[0.85rem] fontButton uppercase h-[4.5rem] px-4"
              }
            >
              Cart
            </button>
          </Link>
        </div>

        <div className={" hidden  xl:flex items-center gap-3 "}>
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
                    src={user.photoURL}
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
      <div
        className={
          "bg-black sticky top-0 z-10   flex justify-between xl:hidden items-center"
        }
      >
        <div className={"flex  items-center "}>
          <img
            src="https://i.ibb.co/1M5qyPW/Abstract-Breaking-Live-News-Free-Logo.png"
            alt=""
            className={"h-[5.0625rem]"}
          />
          <img
            src="https://i.ibb.co/xFfBMC4/Abstract-Breaking-Live-News-Free-Logo-2.png"
            alt=""
            className={" h-[5.0625rem] -ml-6"}
          />
        </div>
        <div className={"bg-black  pr-6"} onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 64 64"
            id="GlobalNavigationBar"
            className={"h-6 w-6"}
          >
            <line
              x2="64"
              y1="15.95"
              y2="15.95"
              fill="none"
              stroke="#d30e36"
              stroke-miterlimit="10"
              stroke-width="4"
              class="colorStroke010101 svgStroke"
            ></line>
            <line
              x2="64"
              y1="32.15"
              y2="32.15"
              fill="none"
              stroke="#d30e36"
              stroke-miterlimit="10"
              stroke-width="4"
              class="colorStroke010101 svgStroke"
            ></line>
            <line
              x2="64"
              y1="48.05"
              y2="48.05"
              fill="none"
              stroke="#d30e36"
              stroke-miterlimit="10"
              stroke-width="4"
              class="colorStroke010101 svgStroke"
            ></line>
          </svg>
        </div>
        {open && (
          <div
            className={
              "w-[16.5rem] rounded lg: absolute right-0 bg-red-800 top-16"
            }
          >
            {user?.photoURL && (
              <img
                src={user?.photoURL}
                className={"w-10 h-10 rounded-full mx-auto my-6"}
              />
            )}
            <p
              className={"px-4 text-white py-4 text-center text-xl fontButton"}
            >
              {user?.displayName}
            </p>
            <ul className={"text-white px-4  py-3"}>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/addProduct"}>
                {" "}
                <li className={"my-2"}>Add Product</li>
              </Link>
              <Link to={"mycart"}>
                {" "}
                <li className={"my-2"}>My Cart</li>
              </Link>
              {user ? (
                <li onClick={hanldeSignOut}>Log Out</li>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
