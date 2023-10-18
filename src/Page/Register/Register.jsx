import { LoginForm } from "../Login/Login Form/LoginForm.jsx";
import { RegisterForm } from "./Register Form/RegisterForm.jsx";
import { useContext, useState } from "react";
import AuthProvider, { authContext } from "../../Auth Provider/AuthContext.jsx";

export const Register = () => {
  const [validation, setValidation] = useState("");
  const [see, setSee] = useState(false);
  const { SignUp, updateProfiles, user, googleSignIn } =
    useContext(authContext);
  const [passvalidation, setPassValidation] = useState("");
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => console.log(result.user));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = e.target;
    const email = event.email.value;
    const password = event.password.value;
    const photo = event.image.value;
    const name = event.name.value;

    setValidation("");
    setPassValidation("");
    if (password.length < 6) {
      setPassValidation("Password must be 6 character");
    } else if (password.length > 15) {
      setPassValidation("Password is not exceed over 15 character");
    } else if (!/[A-Z]/.test(password)) {
      setPassValidation("Password must need atleast one Capital Letter");
    } else if (!/\d/.test(password)) {
      setPassValidation("Password must need atleast one number");
    } else if (!/[@$!%*?&]/.test(password)) {
      setPassValidation("Password must need atleast one special character");
    } else {
      SignUp(email, password)
        .then((result) => {
          console.log(result.user);

          updateProfiles(name, photo);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        })
        .catch((err) => {
          setValidation("Email Already in Use");
        });
    }
  };
  return (
    <>
      {" "}
      <>
        <div
          className={"h-screen relative bg-black flex justify-center "}
          style={{
            backgroundImage: `url("https://i.ibb.co/kms41V4/Untitled-design-2.png")`,
          }}
        >
          <div
            className={" h-full  top-0 flex justify-center items-center w-full"}
          >
            <RegisterForm
              handleSubmit={handleSubmit}
              validation={validation}
              passvalidation={passvalidation}
              handleGoogleLogin={handleGoogleLogin}
            />
          </div>
        </div>
      </>
    </>
  );
};
