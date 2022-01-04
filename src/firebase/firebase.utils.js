import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	onSnapshot,
} from "firebase/firestore";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const config = {
	apiKey: "AIzaSyASvVAwjlKEqkwOGeTcGlzobPFORIB08VE",
	authDomain: "crwn-db-50cbb.firebaseapp.com",
	projectId: "crwn-db-50cbb",
	storageBucket: "crwn-db-50cbb.appspot.com",
	messagingSenderId: "269171050703",
	appId: "1:269171050703:web:8e79a005cc0b77e2d60fba",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = doc(firestore, `users/${userAuth.uid}`);
	const snapshot = await getDoc(userRef);

	if (!snapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error creating user: ", err.message);
		}
	}

	return userRef;
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export {
	onSnapshot,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
};
export const signInWithGoogle = () => signInWithPopup(auth, provider);
