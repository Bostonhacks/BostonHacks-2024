import React from 'react';
import Image from 'next/image';
import ShuttleIcon from '@/public/images/shuttle.svg'; // Replace with actual path to your space shuttle asset

// Review Section Component
const Reviews = () => {
    return (
            <div className="relative w-full pt-16 pb-64 px-8 lg:px-16">
            
            {/* Title Section with Thicker Lines */}
            <div className="flex justify-center items-center mb-12">
                <div className="w-20 lg:w-32 h-1 bg-white"></div> {/* Thicker left line (h-2 for thicker) */}
                <span className="mx-4 text-5xl lg:text-6xl font-ppSupplyMono tracking-wide text-white text-center">
                REVIEWS
                </span>
                <div className="w-20 lg:w-32 h-1 bg-white"></div> {/* Thicker right line (h-2 for thicker) */}
            </div>
        
            {/* Reviews Section */}
            <div className="flex flex-col space-y-12 max-w-6xl mx-auto">
                
                {/* First Review - Justified Left */}
                <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-left max-w-4xl">
                <p className="font-carroisGothic text-3xl">Twilio: Sam Agnew</p>
                <p className="font-carroisGothic mt-4 text-3xl">
                    “I go to a ton of hackathons and Boston-Hacks is consistently one of the best that I continue to sponsor year after year. At BostonHacks, you get the best hackers in both Boston and the Northeast at large. Without fail, the projects that come from these student developers are unique and awe-inspiring. I’m not really sure how the organizers manage to attract such talent, but it might be that good hackers flock to events that are well-run. But never mind all of that. The great food is the real reason to go to BostonHacks!”
                </p>
                </div>
        
                {/* Second Review - Justified Right */}
                <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-right max-w-4xl ml-auto"> {/* Added ml-auto */}
                <p className="font-carroisGothic text-3xl">ITG: Candace Mariso</p>
                <p className="font-carroisGothic mt-4 text-3xl">
                    “ITG's technical mentors had a great time at BostonHacks 2017. The organizers were responsive and accommodating, allowing us to focus on what really mattered—exchanging ideas, providing guidance, and tackling challenges. We met dozens of talented students, resulting in several intern hires and top prospects for future programs. The high quality and innovative hacks made this a can’t-miss event for us.”
                </p>
                </div>
        
                {/* Third Review - Justified Left */}
                <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-left max-w-4xl">
                <p className="font-carroisGothic text-3xl">Cadence: Apurva Kalia</p>
                <p className=" font-carroisGothicmt-4 text-3xl">
                    “The energy was very infectious! It was great to see the young kids wrapping their minds around the given problems and come up with solutions by the end of the event. I was amazed at the talent.”
                </p>
                </div>
            </div>
        
            {/* Space Shuttle Icon */}
            <div className="absolute bottom-8 right-96">
                <Image src={ShuttleIcon} alt="Space Shuttle Icon" width={250} height={250} />
            </div>
            
        </div>
    );
};

export default Reviews;