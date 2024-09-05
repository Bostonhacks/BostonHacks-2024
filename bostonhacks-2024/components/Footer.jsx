"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Replace these paths with the actual paths to your social media assets
import InstagramIcon from '@/public/images/instagram.svg';
import FacebookIcon from '@/public/images/facebook.svg';

const Footer = () => {
  const targetDate = new Date('2024-11-01T00:00:00'); // Set your desired target date here

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days > 0 ? days : 0,
        hours: hours > 0 ? hours : 0,
        minutes: minutes > 0 ? minutes : 0,
        seconds: seconds > 0 ? seconds : 0,
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="relative w-full h-auto text-white pt-80 pb-16 flex flex-col items-center">
      {/* Countdown Timer */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-8xl font-ppSupplyMono mb-32">Launching in..</h2>
        <div className="text-green-500 text-8xl font-sevenSegment">
          {timeLeft.days}:{timeLeft.hours.toString().padStart(2, '0')}:
          {timeLeft.minutes.toString().padStart(2, '0')}:
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-green-400 mt-4 flex justify-around text-3xl">
          <span className="font-carroisGothic mx-6">DAYS</span>
          <span className="font-carroisGothic mx-5">HOURS</span>
          <span className="font-carroisGothic mx-4">MINUTES</span>
          <span className=" font-carroisGothicmx-4">SECONDS</span>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex space-x-32 mt-64">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src={InstagramIcon} alt="Instagram" width={100} height={100} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={FacebookIcon} alt="Facebook" width={100} height={100} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
