import banner from "/src/assets/banner.mp4";
import "/src/Subpage/cyberpunkButton.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Auth Provider/AuthContext.jsx";

export const Banner = () => {
  const { user } = useContext(authContext);
  return (
    <>
      <div
        className={"boxShadow bg-black bg-cover  xl:bg-none"}
        style={{
          backgroundImage: `url("https://i.ibb.co/kms41V4/Untitled-design-2.png")`,
        }}
      >
        <div className={"shadow-inner relative"}>
          <video
            autoPlay
            muted
            loop
            className={"min-h-full min-w-full z-0 hidden xl:block  "}
            src={banner}
          ></video>
          <div
            className={
              "xl:absolute  top-0 flex flex-col justify-center h-screen w-full fontButton items-center"
            }
          >
            <h1
              className={
                "xl:text-[5rem] text-[1.625rem] font-bold text-white text-center "
              }
            >
              Watch Thousand Of Movie, <br /> Series , TvShow & More
            </h1>
            <p className={" text-white py-6"}>
              Watch anywhere. Cancel anytime.
            </p>
            {!user && (
              <Link to={"/register"}>
                <button className="btn btn--secondary">
                  <span className="btn__content ">Join Now </span>
                  <span className="btn__glitch"></span>
                  <span className="btn__label"></span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
