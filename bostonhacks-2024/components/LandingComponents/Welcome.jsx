"use client";
import React from 'react'
import { useState } from 'react';
import Radar from '@/public/images/radar.svg'
import Image from 'next/image'

import BostonHacks from '@/public/images/BostonHacks.svg'

import ApplyButton from "@/public/images/ApplyButton.svg";
import ApplyButtonHover from "@/public/images/ApplyButtonHover.svg";
import SponsorButton from "@/public/images/SponsorButton.svg";
import WelcomeButtonBack from "@/public/images/WelcomeButton.svg";

import Signals from '@/public/images/signals.svg'

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const WelcomeButton = ({ link, image, altImage, alt }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <Link href={link} className="cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            { isHovering ? 
            <Image
                src={altImage}
                alt={alt}
                width={250}  // Adjust based on your SVG size
                height={200}  // Adjust based on your SVG size
            /> :
            <Image
                src={image}
                alt={alt}
                width={250}  // Adjust based on your SVG size
                height={200}  // Adjust based on your SVG size
            />
            }
        </Link>
    )
}


function Welcome() {
    const router = useRouter();

    // const handleApplyClick = () => {
    //     router.push('/login'); // Navigate to the login page
    //     };

    // const handleSponsorClick = () => {
    //     router.push('/sponsor'); // Navigate to the sponsor
    //     };
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
        <div className="mt-[15rem] flex justify-center gap-y-5 sm:gap-x-12 gap-x-0 transform sm:flex-row flex-col items-center"> {/* Increased margin-top for spacing */}
            <WelcomeButton link={"/login"} image={ApplyButton} altImage={ApplyButtonHover} alt="Apply Button" />
            <WelcomeButton link={"/sponsor"} image={SponsorButton} altImage={SponsorButton} alt="Sponsor Button" />
        </div>
        </section>
        
    )
}

export default Welcome