import React from 'react'
import Image from 'next/image'

import Signals from '@/public/images/signals.svg'
import SponsorUs from '@/public/images/SponsorUsButton.svg'

function Searching() {
    return (
    <div className="flex flex-col items-center justify-center h-[80vh]"> 
        <div className="mt-16"> 
            <Image
                src={Signals}
                alt="Signal"
                width={600}  // Adjust width based on your SVG size
                height={50}   // Adjust height based on your SVG size
            />
        </div>

        <div className="text-center mt-5"> {/* Added margin for better spacing */}
            <p className="text-xl md:text-3xl lg:text-5xl font-ppSupplyMono" style={{ color: '#888888' }}> 
                Searching   for   Sponsors . . . .
            </p>
        </div>
        
        <div className="mt-16 flex items-center justify-center"> {/* Added margin-top for spacing */}
            <h1 className="text-8xl font-ppSupplyMono">SPONSOR INFORMATION</h1> {/* Fixed spelling of "SPONSOR" */}
        </div>
        
        <div className="mt-16 flex justify-center space-x-12"> {/* Removed translate-y for a cleaner layout */}
            <div className="cursor-pointer">
                <Image
                    src={SponsorUs}
                    alt="Sponsor Us Button"
                    width={250}  // Adjust based on your SVG size
                    height={200}  // Adjust based on your SVG size
                />
            </div>
        </div>
    </div>
    )
}

export default Searching