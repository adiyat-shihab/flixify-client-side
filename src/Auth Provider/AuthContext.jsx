import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config.js";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const SingOut = () => {
    return signOut(auth);
  };
  const updateProfiles = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `${photo}`,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const info = {
    SignUp,
    user,
    SignIn,
    SingOut,
    loading,
    updateProfiles,
    googleSignIn,
  };
  return <authContext.Provider value={info}>{children} </authContext.Provider>;
};

export default AuthProvider;
