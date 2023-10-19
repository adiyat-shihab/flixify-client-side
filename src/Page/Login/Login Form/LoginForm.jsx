import { HiMiniEye, HiMiniEyeDropper } from "react-icons/hi2";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

export const LoginForm = ({ handleSignIn, handleGoogleLogin }) => {
  const [see, setSee] = useState(false);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section className=" ">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="
               w-[458px]
               mx-auto
               text-center
               bg-[#000000]
               bg-opacity-80
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               "
              >
                <div className="mb-10 md:mb-16 text-center flex items-center justify-center ">
                  <img
                    src="https://i.ibb.co/K7Wkg7k/Abstract-Breaking-Live-News-Free-Logo-removebg-preview.png"
                    alt=""
                    className={"h-[7.0625rem]"}
                  />
                  <img
                    src="https://i.ibb.co/Fhz1dDf/Abstract-Breaking-Live-News-Free-Logo-2-removebg-preview.png"
                    alt="logo"
                    className={" h-[7.0625rem] -ml-6"}
                  />
                </div>
                <form onSubmit={handleSignIn}>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="
                        w-full
                        rounded-md
                        py-3
                        px-5
                        bg-[#333333]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none

                        "
                    />
                  </div>
                  <div className="mb-6 relative flex items-center">
                    <input
                      type={see ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="
                        w-full
                        rounded-md
                        py-3
                        px-5
                        bg-[#333333]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none

                        "
                    />
                    {see ? (
                      <HiEyeOff
                        className={"text-white absolute right-4 cursor-pointer"}
                        onClick={() => setSee(!see)}
                      />
                    ) : (
                      <HiEye
                        className={"text-white absolute right-4 cursor-pointer"}
                        onClick={() => setSee(!see)}
                      />
                    )}
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Sign In"
                      className="
                        w-full
                        rounded-md
                        py-3
                        px-5
                        bg-red-600
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                    />
                  </div>
                </form>
                <p className="text-base mb-6 text-[#adadad]">Connect With</p>
                <ul className="flex justify-between -mx-2 mb-12">
                  <li className="px-2 w-full">
                    <div
                      onClick={handleGoogleLogin}
                      className="
                        cursor-pointer
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        "
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>

                <p className="text-base text-[#adadad]">
                  Not a member yet?
                  <Link
                    className="text-red-500 hover:underline"
                    to={"/register"}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
