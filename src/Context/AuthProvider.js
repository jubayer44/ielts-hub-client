import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   console.log(user);

  const googleProvider = new GoogleAuthProvider();

  //Google Login
  const googleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  //Sign Up user
  const createUer = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In user
  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update User
  const updateUser = (name, photo) => {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //Forget Password
  const forgetPassword = (email) => {
    setLoading(false);
    return sendPasswordResetEmail(auth, email);
  };

  //Log Out
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUer,
    logIn,
    updateUser,
    loading,
    logOut,
    forgetPassword,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
