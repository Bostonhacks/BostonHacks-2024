import React from 'react'

import Image from 'next/image'

import Saturn from '@/public/images/saturn.svg'

function TwilloQuote() {
    return (
    <div className="w-full h-[90vh] flex items-center px-4">
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
        <div className="flex-grow mx-10 " />

        <div className="flex-shrink-0 relative text-white text-center front-ppSupplyMono" style={{ top: '-100px', left: '-150px' }}>
            <p className="text-3xl lg:text-5xl leading-[2] front-ppSupplyMono"> 
                <span className="block leading-[2] front-ppSupplyMono">“BOSTONHACKS IS CONSISTENTLY</span>
                <span className="block leading-[2] front-ppSupplyMono">ONE OF THE BEST [HACKATHONS]</span> 
                <span className="block leading-[2]front-ppSupplyMono">THAT I CONTINUE TO SPONSOR YEAR”</span>
                <span className="block leading-[2]front-ppSupplyMono">AFTER YEAR.</span>
                <span className="block leading-[3]front-ppSupplyMono">SAM AGNEW, TWILIO</span>
            </p>
        </div>
    </div>
    )
}   

export default TwilloQuote