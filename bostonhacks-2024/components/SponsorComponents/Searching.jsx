import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import Signals from '@/public/images/signals.svg'
import SponsorUs from '@/public/images/SponsorUsButton.svg'

function Searching() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] sm:h-[80vh] lg:my-40 sm:my-3 lg:mt-[100px] sm:mt-[-200px]"> 
        <div className="m-16"> 
            <Image
                src={Signals}
                alt="Signal"
                width={600}  // Adjust width based on your SVG size
                height={50}   // Adjust height based on your SVG size
            />
        </div>

        <div className="text-center lg:mt-5 sm:mt-2"> {/* Added margin for better spacing */}
            <p className="text-xl md:text-3xl lg:text-5xl font-ppSupplyMono" style={{ color: '#888888' }}> 
                Searching   for   Sponsors . . . .
            </p>
        </div>
        
        <div className="mt-16 flex items-center justify-center"> {/* Added margin-top for spacing */}
            <h1 className="text-5xl lg:text-7xl md:7xl font-ppSupplyMono text-center">SPONSOR INFORMATION</h1> {/* Fixed spelling of "SPONSOR" */}
        </div>
        
        <div className="mt-16 flex justify-center space-x-12"> 
            <Link href="https://forms.gle/SYCDXQN2R1Rqq2TJ6" passHref> {/* Add your desired URL */}
                <div className="cursor-pointer">
                    <Image
                        src={SponsorUs}
                        alt="Sponsor Us Button"
                        width={250}  // Adjust based on your SVG size
                        height={200}  // Adjust based on your SVG size
                    />
                </div>
            </Link>
        </div>
    </div>
    )
}

export default Searching