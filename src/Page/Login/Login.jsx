import videobg from "../../assets/video.mp4";
import { LoginForm } from "./Login Form/LoginForm.jsx";

export const Login = () => {
  return (
    <>
      <div className={"h-screen relative bg-black"}>
        <img
          className={" hidden lg:block lg:min-h-full lg:min-w-full z-0  "}
          src="https://i.ibb.co/kms41V4/Untitled-design-2.png"
          alt=""
        />
        <div
          className={
            " h-full absolute top-0 flex justify-center items-center w-full"
          }
        >
          <LoginForm />
        </div>
      </div>
    </>
  );
};
