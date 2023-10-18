import videobg from "../../assets/video.mp4";
import { LoginForm } from "./Login Form/LoginForm.jsx";

export const Login = () => {
  return (
    <>
      <div
        className={"h-screen relative bg-black flex justify-center "}
        style={{
          backgroundImage: `url("https://i.ibb.co/kms41V4/Untitled-design-2.png")`,
        }}
      >
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
