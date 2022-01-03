import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
	apiKey: "AIzaSyASvVAwjlKEqkwOGeTcGlzobPFORIB08VE",
	authDomain: "crwn-db-50cbb.firebaseapp.com",
	projectId: "crwn-db-50cbb",
	storageBucket: "crwn-db-50cbb.appspot.com",
	messagingSenderId: "269171050703",
	appId: "1:269171050703:web:8e79a005cc0b77e2d60fba",
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
