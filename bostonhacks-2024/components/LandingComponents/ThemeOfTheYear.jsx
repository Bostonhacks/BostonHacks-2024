import React from 'react'
import Image from 'next/image'

import Saturn from '@/public/images/saturn-theme.svg'
import InterstellarInnovations from '@/public/images/INTERSTELLAR-INNOVATIONS.svg'

function ThemeOfTheYear() {
  return (
    <div className="w-full h-[50vh] flex items-center px-4">
      {/* Saturn Theme SVG */}
        <div className="flex-shrink-0">
            <Image
            src={Saturn}
            alt="Saturn Theme"
            width={1000}
            height={500}
            layout="intrinsic"
            className="object-contain"
            />
        </div>
        
        {/* Space between the two SVGs */}
        <div className="flex-grow mx-10" />

        {/* Interstellar Innovations SVG */}
        <div className="flex-shrink-0 relative" style={{ top: '-250px', left: '-200px' }}>
            <Image
            src={InterstellarInnovations}
            alt="Interstellar Innovations"
            width={800}
            height={200}
            layout="intrinsic"
            className="object-contain"
            />
        </div>
    </div>
  )
}

export default ThemeOfTheYear