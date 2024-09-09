"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js router
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/firebase-config'; // Ensure Firebase is properly initialized
import { updateDoc, doc, addDoc, query, collection, getDocs, where } from 'firebase/firestore';
import Application from './Application';

// Application page
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

  // Change user's status to confirmed
  const confirmUser = async (userId) => {
    try {
      const userDoc = doc(db, 'applications', userId);
      await updateDoc(userDoc, { status: 'Confirmed' });
      setApplication({ ...application, status: 'Confirmed' });
    } catch (err) {
      console.error('Error confirming user:', err);
    }
  };

  // Change user's status to declined
  const declineUser = async (userId) => {
    try {
      const userDoc = doc(db, 'applications', userId);
      await updateDoc(userDoc, { status: 'Declined' });
      setApplication({ ...application, status: 'Declined' });
    } catch (err) {
      console.error('Error declining user:', err);
    }
  };

  // Fetch application every second until data is found
  const fetchApplication = async (intervalId) => {
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
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return router.push('/login');

    const intervalId = setInterval(() => {
      fetchApplication(intervalId);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [user, loading, router]);

  return (
    <div>
      {/* Check user's status, if not started, show application */}
      {application?.status === 'Not Started' && (
        <Application applicationId={application.id} />
      )}

      {/* Show user status */}
      {applicationTypes.includes(application?.status) && (
        <div
          style={{
            color: 'white',
            fontSize: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingBottom: '60px',
          }}
        >
          <h3>Your Status:</h3>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              width: '200px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '20px',
            }}
          >
            <h3>{application?.status}</h3>
          </div>
        </div>
      )}

      {/* If submitted, show message */}
      {application?.status === 'Submitted' && (
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Thank you for applying to BostonHacks 2023! We will review your
            application and update you when our decisions are released!
          </h3>
        </div>
      )}

      {/* If accepted, show confirmation buttons */}
      {application?.status === 'Accepted' && (
        <div
          style={{
            color: 'white',
            background: 'rgba(255, 255, 255, 0.15)',
            width: '80%',
            fontSize: '25px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingBottom: '60px',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>
            Congratulations on being accepted into BostonHacks! Please confirm
            your attendance to help us prepare.
          </h3>
          <button className="accept" onClick={() => confirmUser(application?.id)}>
            I Confirm
          </button>

          <h3 style={{ textAlign: 'center' }}>
            If your plans have changed and you can no longer attend, please decline.
          </h3>
          <button className="decline" onClick={() => declineUser(application?.id)}>
            I Decline
          </button>
        </div>
      )}

      {/* If confirmed, show QR code */}
      {application?.status === 'Confirmed' && (
        <div
          style={{
            color: 'white',
            background: 'rgba(255, 255, 255, 0.15)',
            width: '80%',
            fontSize: '25px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingBottom: '60px',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>
            Thank you for confirming your spot at BostonHacks 2022. Keep an eye out for important emails!
          </h3>
          <h3 style={{ textAlign: 'center' }}>
            Please bring the QR code below for check-in:
          </h3>
          <img
            className="img-fluid"
            src="/path/to/qr-code.png" // Replace with the actual QR code URL
            width={150}
            height={150}
            alt="QR Code"
          />
        </div>
      )}
    </div>
  );
};

export default Portal;
