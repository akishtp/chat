import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        updateUserData(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const updateUserData = async (user) => {
    const docRef = doc(db, "users", user.uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let data = docSnap.data();
      setUser({
        ...user,
        username: data.username,
        profileUrl: data.profileUrl,
        uid: data.uid,
      });
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return { success: true };
    } catch (error) {
      let message = error.message;
      if (message.includes("(auth/invalid-email)")) message = "Invalid Email";
      if (message.includes("(auth/invalid-credential)"))
        message = "Email and passwords do not match";
      return { success: false, message };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const signup = async (email, password, username, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", response.user.uid), {
        username,
        profileUrl,
        uid: response.user.uid,
      });

      return { success: true, data: response.user };
    } catch (error) {
      let message = error.message;
      if (message.includes("(auth/invalid-email)")) message = "Invalid Email";
      if (message.includes("(auth/email-already-in-use)"))
        message = "User already registered with email. Try loggin in.";
      if (message.includes("(auth/weak-password)"))
        message = "Choose a longer password";
      return { success: false, message };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error(
      "useAuth must be wrapper in AuthContextProvider" || "developer: my bad 😅"
    );
  }
  return value;
};
