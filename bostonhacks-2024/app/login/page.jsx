"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js 13+
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '@/firebase/firebase-config'; // Import Firebase auth, provider, and Firestore
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore methods correctly
import Image from 'next/image';
import GoogleIcon from '@/public/images/GoogleIcon.svg'; // Import your Google icon SVG

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setError('');
  
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      // Store the UID and email in localStorage
      localStorage.setItem('userUid', user.uid);
      localStorage.setItem('userEmail', user.email);

      // Fetch user role from Firestore
      const userDocRef = doc(db, 'users', user.uid); // Assuming 'users' collection has roles
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        // If the user is an admin, redirect to the admin dashboard
        if (userData.role === 'admin') {
          router.push('/admin');
          return; // End execution if user is admin
        }
      }

      // If not an admin, continue with the normal application check
      const applicationDocRef = doc(db, 'applications', user.uid);
      const applicationDocSnap = await getDoc(applicationDocRef);
  
      if (applicationDocSnap.exists()) {
        router.push('/portal'); // If the application exists, redirect to portal
      } else {
        router.push('/closed'); // If no application exists, redirect to application form
      }
    } catch (err) {
      setError('Failed to log in with Google. Please try again.');
      console.error('Google Login Error: ', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg">
        <h2 className="text-white text-4xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 flex items-center justify-center"
          >
            <Image
              src={GoogleIcon} // Use your Google icon SVG here
              alt="Google icon"
              width={20}
              height={20}
            />
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
