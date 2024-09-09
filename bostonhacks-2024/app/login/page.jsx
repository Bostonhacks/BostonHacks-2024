"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js 13+
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '@/firebase/firebase-config'; // Import Firebase auth, provider, and Firestore
import { query, collection, where, getDocs } from 'firebase/firestore'; // For Firestore queries
import Image from 'next/image';
import GoogleIcon from '@/components/GoogleIcon.jsx';

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setError('');

    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if the user has already submitted an application in Firestore
      const q = query(
        collection(db, 'applications'),
        where('uid', '==', user.uid) // Check if the application for the user exists
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // No application found, route to the application page
        router.push('/application');
      } else {
        // Application found, route to the portal page
        router.push('/portal');
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
