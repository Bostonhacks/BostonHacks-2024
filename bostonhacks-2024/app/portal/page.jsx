"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js 13+
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebase/firebase-config'; // Import Firebase auth and Firestore
import { updateDoc, doc, query, collection, getDocs, where, addDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import Image from 'next/image';
//import qrCode from '@/public/images/qrCode.png'; // Example QR code image

const applicationTypes = [
  'Submitted',
  'Waitlisted',
  'Rejected',
  'Declined',
  'Confirmed',
  'Accepted',
  'Checked In',
];

const Portal = () => {
  const [user, loading] = useAuthState(auth);
  const [application, setApplication] = useState({});
  const router = useRouter();

  // Fetch the application for the logged-in user
  const fetchApplication = async (intervalId) => {
    try {
      const q = query(collection(db, 'applications'), where('uid', '==', user?.uid));
      const docSnapshot = await getDocs(q);

      if (docSnapshot.docs.length !== 0) {
        setApplication({ ...docSnapshot.docs[0].data(), id: docSnapshot.docs[0].id });
        clearInterval(intervalId); // Stop polling once we have the data
      } else {
        // Create a new application if one doesn't exist
        await addDoc(collection(db, 'applications'), {
          uid: user.uid,
          authProvider: 'google',
          email: user.email,
          status: 'Not Started',
        });
        setApplication({
          uid: user.uid,
          status: 'Not Started',
        });
      }
    } catch (err) {
      console.error('Error fetching application:', err);
    }
  };

  // Confirm user's attendance
  const confirmUser = async (userId) => {
    const userDoc = doc(db, 'applications', userId);
    await updateDoc(userDoc, { status: 'Confirmed' });
    setApplication({ ...application, status: 'Confirmed' });
  };

  // Decline user's attendance
  const declineUser = async (userId) => {
    const userDoc = doc(db, 'applications', userId);
    await updateDoc(userDoc, { status: 'Declined' });
    setApplication({ ...application, status: 'Declined' });
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return router.push('/login');
  
    const q = query(collection(db, 'applications'), where('uid', '==', user?.uid));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setApplication({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id });
      } else {
        // Create a new application if one doesn't exist
        addDoc(collection(db, 'applications'), {
          uid: user.uid,
          authProvider: 'google',
          email: user.email,
          status: 'Not Started',
        }).then((docRef) => {
          setApplication({
            uid: user.uid,
            status: 'Not Started',
          });
        });
      }
    }, (error) => {
      console.error('Error fetching application:', error);
    });
    return () => unsubscribe(); // Cleanup the listener on unmount
}, [user, loading, router]);

  return (
    <div className="flex justify-center items-center h-screen  text-white">
      <div className="w-full max-w-3xl bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
        {/* Application status display */}
        <h2 className="text-center text-4xl font-bold mb-6 font-ppSupplyMono">
          Your Application Status
        </h2>

        {/* Show different content based on the user's status */}
        {application?.status === 'Not Started' && (
          <div className="text-center">
            <h3 className="text-2xl">You haven&apos;t started your application yet.</h3>
          </div>
        )}

        {application?.status === 'Submitted' && (
          <div className="text-center">
            <h3 className="text-2xl font-ppSupplyMono">Thank you for applying to BostonHacks 2024!</h3>
            <p>We will review your application and update you when decisions are released.</p>
          </div>
        )}

        {application?.status === 'Accepted' && (
          <div className="text-center">
            <h3 className="text-2xl font-ppSupplyMono">
              Congratulations! You have been accepted to BostonHacks 2024!
            </h3>
            <p>Please confirm your attendance:</p>
            <div className="mt-4 space-x-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-ppSupplyMono py-2 px-4 rounded"
                onClick={() => confirmUser(application?.id)}
              >
                I Confirm
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-ppSupplyMono py-2 px-4 rounded"
                onClick={() => declineUser(application?.id)}
              >
                I Decline
              </button>
            </div>
          </div>
        )}

        {application?.status === 'Confirmed' && (
          <div className="text-center">
            <h3 className="text-2xl font-ppSupplyMono">
              Thank you for confirming your attendance!
            </h3>
            {/* QR code display could go here */}
          </div>
        )}

        {application?.status === 'Declined' && (
          <div className="text-center">
            <h3 className="text-2xl font-ppSupplyMono">
              Sorry to hear you can&apos;t attend BostonHacks 2024.
            </h3>
          </div>
        )}

        {/* Show current status for all application types */}
        {applicationTypes.includes(application?.status) && (
          <div className="mt-6 text-center">
            <p className="text-lg font-bold">
              Current Status: <span className="text-emerald-400">{application?.status}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portal;
