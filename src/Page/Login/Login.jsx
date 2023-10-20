import videobg from "../../assets/video.mp4";
import { LoginForm } from "./Login Form/LoginForm.jsx";
import { authContext } from "../../Auth Provider/AuthContext.jsx";
import { useContext, useState } from "react";

export const Login = () => {
  const { SignIn, googleSignIn } = useContext(authContext);
  const [validation, setValidation] = useState("");
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setValidation("Email/Password doesn't match");
          console.log(error);
        }
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setValidation("");
    SignIn(email, password)
      .then((result) => {
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setValidation("Email/Password doesn't match");
          console.log(error);
        }
      });
  };
  return (
    <>
      <div
        className={"  bg-black flex justify-center "}
        style={{
          backgroundImage: `url("https://i.ibb.co/kms41V4/Untitled-design-2.png")`,
        }}
      >
        <div className={" py-32   flex justify-center items-center w-full"}>
          <LoginForm
            handleSignIn={handleSignIn}
            handleGoogleLogin={handleGoogleLogin}
          />
        </div>
      </div>
    </>
  );
};
