"use client";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../../../firebase/firebase-config";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

export default function AdminLogin() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      // Initiate Google Sign-In
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if the signed-in user is an admin
      const isAdmin = await checkAdminStatus(user.email);
      if (isAdmin) {
        // Redirect to the admin applicants page if the user is an admin
        router.push("/admin/applicants");
      } else {
        // Show error message if the user is not an admin
        setError("You are not authorized to access the admin panel.");
      }
    } catch (error) {
      // Handle errors during sign-in
      setError(error.message);
    }
  };

  // Function to check if a user is an admin by verifying their email in Firestore
  const checkAdminStatus = async (email) => {
    try {
      const adminRef = doc(db, "admin", email);
      const adminSnap = await getDoc(adminRef);
      return adminSnap.exists();
    } catch (error) {
      console.error("Error checking admin status:", error);
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Admin Login</h1>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}