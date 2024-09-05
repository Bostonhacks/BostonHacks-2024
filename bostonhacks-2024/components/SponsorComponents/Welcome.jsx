import React from 'react'
import Radar from '@/public/images/radar.svg'
import Image from 'next/image'

import BostonHacks from '@/public/images/bostonhacks.svg'

import ApplyButton from "@/public/images/ApplyButton.svg";
import SponsorButton from "@/public/images/SponsorButton.svg";

function Welcome() {
    return (
        <div className="relative h-screen bg-cover bg-center">
            <div className="absolute top-0 right-0 z-0 flex items-start justify-end transform translate-y-[-125px]">
                <Image
                    src={Radar}
                    alt="Radar Design"
                    width={1850}
                    height={1982}
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center transform translate-y-[-100px]">
                <div className="relative">
                    <div className="absolute -top-20 left-0 font-carroisGothic">
                        <p className="text-xl md:text-3xl lg:text-5xl font-carroisGothic">NOVEMBER 2 - 3</p>
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
                    <div className="absolute -bottom-17 right-0 font-carroisGothic">
                        <br></br>
                        <p className="text-5xl md:text-7xl lg:text-9xl font-carroisGothic">2024</p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Welcome
