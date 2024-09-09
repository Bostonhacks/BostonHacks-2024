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

      // Store the UID in localStorage or context (for simplicity, using localStorage here)
      localStorage.setItem('userUid', user.uid);

      // Check if the user has an existing application in Firestore
      const docRef = doc(db, 'applications', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // If an application exists, redirect to the portal
        router.push('/portal');
      } else {
        // If no application exists, redirect to the application form
        router.push('/application');
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
            className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200"
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
