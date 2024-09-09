import React from 'react'
import Radar from '@/public/images/radar.svg'
import Image from 'next/image'

import BostonHacks from '@/public/images/Bostonhacks.svg'

import ApplyButton from "@/public/images/ApplyButton.svg";
import SponsorButton from "@/public/images/SponsorButton.svg";

import Signals from '@/public/images/signals.svg'

function Welcome() {
    return (
        <section>
        <div className="relative bg-center px-5 md:px-0 w-full">
            <div className="absolute h-screen bg-cover top-0 right-0 z-0 flex items-start justify-end transform translate-y-[-125px]">
                <Image
                    src={Radar}
                    alt="Radar Design"
                    width={1850}
                    height={1982}
                />
            </div>
        </div>
        <div className="w-full h-[80vh] flex flex-col items-center justify-center text-white text-center transform px-5 sm:px-0">
            <div className="relative">
                <div className="absolute -top-20 left-0 font-carrois">
                    <p className="text-xl md:text-3xl lg:text-5xl font-carrois">NOVEMBER 2 - 3</p>
                </div>

                {/* Centered "BOSTONHACKS" */}
                <div className="flex justify-center items-center">
                    <Image
                        src={BostonHacks}
                        alt="BostonHacks 2024"
                        width={1000}  // Adjust based on the required size
                        height={600} // Adjust based on the required size
                    />
                </div>

                {/* "2024" aligned to the right edge of "BOSTONHACKS" */}
                <div className="absolute -bottom-17 right-0 font-carrois">
                    <br></br>
                    <p className="text-5xl md:text-7xl lg:text-9xl font-carrois">2024</p>
                </div>

                
            </div>

                
        </div>
        <div className="mt-[15rem] flex justify-center space-x-12 transform"> {/* Increased margin-top for spacing */}
            <div className="cursor-pointer">
                <Image
                    src={ApplyButton}
                    alt="Apply Button"
                    width={250}  // Adjust based on your SVG size
                    height={200}  // Adjust based on your SVG size
                />
            </div>
            <div className="cursor-pointer">
                <Image
                    src={SponsorButton}
                    alt="Sponsor Button"
                    width={250}  // Adjust based on your SVG size
                    height={200}  // Adjust based on your SVG size
                />
            </div>
        </div>
        </section>
        
    )
}

export default Welcome