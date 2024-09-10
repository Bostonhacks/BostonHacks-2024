import React from 'react';
import Radar from '@/public/images/radar.svg';
import RadarMobile from '@/public/images/radarmobile.svg';
import Image from 'next/image';
import BostonHacks from '@/public/images/BostonHacks.svg';

function Welcome() {
    return (
        <div className="relative h-[80vh] sm:h-screen bg-cover bg-center">
            {/* Desktop Radar */}
            <div className="hidden md:block absolute top-0 right-0 z-0 flex items-start justify-end transform translate-y-[-125px]">
                <Image
                    src={Radar}
                    alt="Radar Design"
                    width={1850}
                    height={1982}
                />
            </div>

            {/* Mobile Radar */}
            <div className="block md:hidden absolute top-0 right-0 z-0 flex items-start justify-end transform translate-y-[-125px]">
                <Image
                    src={RadarMobile}
                    alt="Radar Mobile Design"
                    width={750}
                    height={800}
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center transform translate-y-[-50px] sm:translate-y-[-400px] px-4 sm:px-10">
                <div className="relative">
                    <div className="absolute -top-20 left-0 font-carroisGothic">
                        <p className="text-xl md:text-3xl lg:text-5xl font-carroisGothic">NOVEMBER 2 - 3</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                            src={BostonHacks}
                            alt="BostonHacks 2024"
                            width={1000}
                            height={600}
                        />
                    </div>

                    <div className="absolute -bottom-17 right-0 font-carroisGothic">
                        <p className="text-5xl md:text-7xl lg:text-9xl font-carroisGothic">2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;