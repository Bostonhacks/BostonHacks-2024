import React from 'react';
import Image from 'next/image';

import Saturn from '@/public/images/saturn-theme.svg'; // For desktop
import MobileSaturn from '@/public/images/MobileSaturn.svg'; // For mobile
import InterstellarInnovations from '@/public/images/INTERSTELLAR-INNOVATIONS.svg';

function ThemeOfTheYear() {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center">
      
      {/* For mobile view */}
      <div className="block lg:hidden w-full flex flex-col items-center justify-center text-center space-y-6">
        {/* Mobile Saturn SVG on the right */}
        <div className="flex justify-end w-full">
          <Image
            src={MobileSaturn}
            alt="Saturn Theme Mobile"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        {/* Interstellar Innovations SVG on the left below Saturn */}
        <div className="w-full">
          <Image
            src={InterstellarInnovations}
            alt="Interstellar Innovations"
            width={600}
            height={200}
            className="object-contain mx-auto"
          />
        </div>
      </div>

      {/* For desktop/laptop view */}
      <div className="hidden lg:flex w-full h-[50vh] items-center justify-center">
        {/* Saturn Theme SVG */}
        <div className="flex-shrink-0" style={{ width: '50vw', height: 'auto' }}> {/* Scales based on 40% of the viewport width */}
          <Image
            src={Saturn}
            alt="Saturn Theme"
            layout="intrinsic"
            width={1000}
            height={500}
            className="object-contain"
          />
        </div>
        
        {/* Space between the two SVGs */}
        <div className="flex-grow mx-10" />

        {/* Interstellar Innovations SVG */}
        <div className="flex-shrink-0 relative" style={{ width: '40vw', top: '-20vh', left: '-10vw' }}> {/* Scales based on 30% of the viewport width */}
          <Image
            src={InterstellarInnovations}
            alt="Interstellar Innovations"
            layout="intrinsic"
            width={800}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ThemeOfTheYear;
