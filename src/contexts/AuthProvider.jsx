// import React, { useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";

// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   // logout

//   const logOutUser = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const signInUserWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // observer

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const userInfo = {
//     signInUserWithGoogle,
//     loading,
//     setLoading,
//     user,
//     logOutUser,
//   };

//   return <AuthContext value={userInfo}>{children}</AuthContext>;
// };

// export default AuthProvider;
