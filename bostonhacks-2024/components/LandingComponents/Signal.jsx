import React from 'react'
import Image from 'next/image'

import Signals from '@/public/images/signals.svg'

function Signal() {
    return (
    <div className="flex flex-col items-center justify-center h-screen"> 
            <div className="mt-2"> 
                <Image
                    src={Signals}
                    alt="Signal"
                    width={600}  // Adjust width based on your SVG size
                    height={50} // Adjust height based on your SVG size
                />
            </div>

            <div className="mt-10 text-center"> 
                <p className="text-xl md:text3xl lg:text-4xl font-pp-reg " style={{ color: '#888888' }}> 
                    Searching for space signals..
                </p>
            </div>
        </div>
    )
}

export default Signal