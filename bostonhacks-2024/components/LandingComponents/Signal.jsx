import React from 'react'
import Image from 'next/image'

import Signals from '@/public/images/signals.svg'

function Signal() {
    return (
    <div className="flex flex-col items-center justify-center h-[50vh]"> 
            <div className="mt-2 mx-10"> 
                <Image
                    src={Signals}
                    alt="Signal"
                    width={600}  // Adjust width based on your SVG size
                    height={50} // Adjust height based on your SVG size
                />
            </div>

            <div className="mt-10 text-center"> 
                <p className="text-2xl md:text3xl lg:text-4xl font-ppSupplyMono " style={{ color: '#888888' }}> 
                    Searching for space signals..
                </p>
            </div>
        </div>
    )
}

export default Signal