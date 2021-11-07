import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const createUserWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    setIsLoading(true);
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
        getIdToken(user).then((idToken) =>
          localStorage.setItem("idToken", idToken)
        );
        setUser(user);
      }
      setIsLoading(false);
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
    isLoading,
    setIsLoading,
  };
};

export default UseFirebase;
