import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  //   log out function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    createUserWithEmail,
    updateUser,
    signInWithEmail,
  };
};

export default UseFirebase;
