import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { onUserLogin } from "../store/action/user";

const firebaseConfig = {
  apiKey: "AIzaSyD6U8-OL5ruOW0rp2Gop4xAtp2z_5nbk4A",
  authDomain: "devstree-practical-task.firebaseapp.com",
  projectId: "devstree-practical-task",
  storageBucket: "devstree-practical-task.appspot.com",
  messagingSenderId: "954177873069",
  appId: "1:954177873069:web:8021212e350e5bd2ae5224",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    console.log("response", response);
    let user = {
      firstName: response?.user?.firstName || undefined,
      lastName: response?.user?.firstName || undefined,
      email: response?.user?.email || undefined,
      dob: response?.user?.firstName || undefined,
      mobileNumber: response?.user?.firstName || undefined,
      profileImage: response?.user?.profileImage || undefined,
      userId: response?.user?.uid || undefined,
    };
    onUserLogin(user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
