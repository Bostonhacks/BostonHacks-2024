import React from 'react';
import Image from 'next/image';

import Saturn from '@/public/images/saturn.svg';
import MobileSaturn from '@/public/images/SaturnSponsorMobile.svg';

function TwilloQuote() {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center">
      
      {/* For mobile view */}
      <div className="block lg:hidden w-full flex flex-col items-center justify-center text-center">
        {/* Mobile Saturn SVG on the right */}
        <div className="flex justify-end w-full mb-4">
          <Image
            src={MobileSaturn}
            alt="Saturn Theme Mobile"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Quote text on mobile */}
        <div className="text-white text-center font-ppSupplyMono mx-4" style={{ position: 'relative', top: '-50px' }}>
          <p className="text-xl leading-7">
            <span className="block">“BOSTONHACKS IS CONSISTENTLY</span>
            <span className="block">ONE OF THE BEST [HACKATHONS]</span>
            <span className="block">THAT I CONTINUE TO SPONSOR YEAR</span>
            <span className="block">AFTER YEAR.”</span>
            <span className="block mt-4 text-lg">- SAM AGNEW, TWILIO</span>
          </p>
        </div>
      </div>

      {/* For desktop/laptop view */}
      <div className="hidden lg:flex w-full h-[50vh] items-center justify-center">
        {/* Saturn Theme SVG */}
        <div className="flex-shrink-0" style={{ width: '40vw', height: 'auto' }}>
          <Image
            src={Saturn}
            alt="Saturn Theme"
            layout="intrinsic"
            width={1000}
            height={500}
            className="object-contain"
          />
        </div>
        
        {/* Space between the two elements */}
        <div className="flex-grow mx-10" />

        {/* Quote text on desktop */}
        <div className="flex-shrink-0 relative text-white text-center font-ppSupplyMono" style={{ top: '-100px', left: '-50px' }}>
          <p className="text-3xl lg:text-5xl leading-snug">
            <span className="block">“BOSTONHACKS IS CONSISTENTLY</span>
            <span className="block">ONE OF THE BEST [HACKATHONS]</span>
            <span className="block">THAT I CONTINUE TO SPONSOR YEAR</span>
            <span className="block">AFTER YEAR.”</span>
            <span className="block mt-4 text-2xl">- SAM AGNEW, TWILIO</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwilloQuote;
