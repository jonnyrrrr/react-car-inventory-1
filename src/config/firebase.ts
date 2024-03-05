import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() }