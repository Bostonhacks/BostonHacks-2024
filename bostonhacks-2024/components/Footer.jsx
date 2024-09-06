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
    <div className="relative w-full h-auto text-white pt-20 pb-16 flex flex-col items-center lg:pt-80">
      {/* Countdown Timer */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-8xl font-ppSupplyMono mb-10 lg:mb-32">Launching in..</h2>
        <div className="font-digital text-green-500 text-[50px] md:text-[100px] lg:text-[150px]">
          {timeLeft.days} &nbsp;:&nbsp; {timeLeft.hours.toString().padStart(2, '0')} &nbsp;:&nbsp;
          {timeLeft.minutes.toString().padStart(2, '0')} &nbsp;:&nbsp;
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-green-400 mt-4 flex flex-wrap justify-around text-2xl md:text-4xl">
          <span className="font-carroisGothic mx-4">DAYS</span>
          <span className="font-carroisGothic mx-4">HOURS</span>
          <span className="font-carroisGothic mx-4">MINUTES</span>
          <span className="font-carroisGothic mx-4">SECONDS</span>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex space-x-8 md:space-x-32 mt-16 md:mt-32">
        <a href="https://www.instagram.com/bostonhacks/" target="_blank" rel="noopener noreferrer">
          <Image src={InstagramIcon} alt="Instagram" width={125} height={125} md-width={100} md-height={100} sm-height={25} sm-width={25}/>
        </a>
        <a href="https://www.facebook.com/bostonhacks/" target="_blank" rel="noopener noreferrer">
          <Image src={FacebookIcon} alt="Facebook" width={125} height={125} md-width={100} md-height={100} sm-height={25} sm-width={25}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
