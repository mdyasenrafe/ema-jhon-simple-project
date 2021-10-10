import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const initializeAuth = () => {
  initializeApp(FirebaseConfig);
};
export default initializeAuth;
