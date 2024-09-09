"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // Next.js router
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebase/firebase-config'; // Ensure Firebase is properly initialized
import { updateDoc, doc, addDoc, query, collection, getDocs, where } from 'firebase/firestore';
import Image from 'next/image';
import Application from '../application/page'; // Ensure Application is imported

const Portal = () => {
  const [user, loading] = useAuthState(auth); // Firebase Auth hook
  const [application, setApplication] = useState({});
  const router = useRouter(); // Using Next.js useRouter
  const applicationTypes = [
    'Submitted',
    'Waitlisted',
    'Rejected',
    'Declined',
    'Confirmed',
    'Accepted',
    'Checked In',
  ];

  // Confirm user's attendance
  const confirmUser = async (userId) => {
    try {
      const userDoc = doc(db, 'applications', userId);
      await updateDoc(userDoc, { status: 'Confirmed' });
      setApplication({ ...application, status: 'Confirmed' });
    } catch (err) {
      console.error('Error confirming user:', err);
    }
  };

  // Decline user's attendance
  const declineUser = async (userId) => {
    try {
      const userDoc = doc(db, 'applications', userId);
      await updateDoc(userDoc, { status: 'Declined' });
      setApplication({ ...application, status: 'Declined' });
    } catch (err) {
      console.error('Error declining user:', err);
    }
  };

  const fetchApplication = useCallback(async (intervalId) => {
    try {
      const q = query(collection(db, 'applications'), where('uid', '==', user?.uid));
      const docSnapshot = await getDocs(q);

      if (docSnapshot.docs.length !== 0) {
        setApplication({ ...docSnapshot.docs[0].data(), id: docSnapshot.docs[0].id });
        clearInterval(intervalId); // Stop polling
      } else {
        await addDoc(collection(db, 'applications'), {
          uid: user.uid,
          authProvider: 'google',
          email: user.email,
          status: 'Not Started',
        });
      }
    } catch (err) {
      console.error('Error fetching application:', err);
      alert('An error occurred while fetching user data');
    }
  }, [user]);

  useEffect(() => {
    if (loading) return;
    if (!user) return router.push('/login');

    const intervalId = setInterval(() => {
      fetchApplication(intervalId);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [user, loading, router, fetchApplication]);

  return (
    <div>
      {application?.status === 'Not Started' && (
        <Application applicationId={application.id} />
      )}

      {applicationTypes.includes(application?.status) && (
        <div style={{ color: 'white', fontSize: '25px', paddingBottom: '60px' }}>
          <h3>Your Status:</h3>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              width: '200px',
              height: '50px',
              borderRadius: '20px',
            }}
          >
            <h3>{application?.status}</h3>
          </div>
        </div>
      )}

      {application?.status === 'Submitted' && (
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Thank you for applying to BostonHacks 2023! We will review your application and update you when decisions are made!
          </h3>
        </div>
      )}

      {application?.status === 'Accepted' && (
        <div style={{ color: 'white', background: 'rgba(255, 255, 255, 0.15)', width: '80%', fontSize: '25px', borderRadius: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Congratulations! Please confirm your attendance.</h3>
          <button className="accept" onClick={() => confirmUser(application?.id)}>
            I Confirm
          </button>
          <h3 style={{ textAlign: 'center' }}>If you can&apos;t attend, please decline.</h3>
          <button className="decline" onClick={() => declineUser(application?.id)}>
            I Decline
          </button>
        </div>
      )}

      {application?.status === 'Confirmed' && (
        <div style={{ color: 'white', background: 'rgba(255, 255, 255, 0.15)', width: '80%', fontSize: '25px', borderRadius: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Thank you for confirming! Please bring the QR code for check-in:</h3>
          <Image src="/path/to/qr-code.png" width={150} height={150} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default Portal;
