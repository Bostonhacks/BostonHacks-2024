"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js 13+
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebase/firebase-config'; // Import Firebase auth and provider
import Image from 'next/image';

import GoogleIcon from '@/components/GoogleIcon.jsx';

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setError('');

    try {
      // Sign in with Google
      await signInWithPopup(auth, googleProvider);
      router.push('/application'); // Redirect to dashboard after successful login
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
