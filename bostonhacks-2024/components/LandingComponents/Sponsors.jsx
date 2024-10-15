import { React } from 'react';
import '../../public/fonts/fonts.css';
import Image from 'next/image';
import Title from '@/components/LandingComponents/Title.jsx';

import hold from '@/public/images/coming soon.png';

// sponsor images
import patientSafety from '@/public/images/sponsors/challengelogo.png';
import flatlogic from '@/public/images/sponsors/Flatlogic.png';
import xyz from '@/public/images/sponsors/xyz-logo-color.png';
import ignite from '@/public/images/sponsors/Ignite.png';
import wolfram from '@/public/images/sponsors/wolfram.png';
import sargent from '@/public/images/sponsors/SAR_web_black_bg.png';
import interviewCake from '@/public/images/sponsors/cake_logo_white_on_blue.png';


// import sponsorBackground from '@/public/images/sponsorBackground.svg';
import sponsorBackground from '@/public/images/sponsorBackgroundLighter.svg';

const Sponsors = () => {
    const sponsors = [
        {
            id: 1,
            name: 'Patient Safety Technology',
            images: patientSafety,
            scale: 75
        },
        {
            id: 2,
            name: 'Flatlogic',
            images: flatlogic,
            scale: 90
        },
        {
            id: 3,
            name: '.xyz',
            images: xyz,
            scale: 75
        },
        {
            id: 4,
            name: 'Ignite',
            images: ignite,
            scale: 100
        },
        {
            id: 5,
            name: 'Wolfram',
            images: wolfram,
            scale: 75
        },
        {
            id: 6,
            name: 'Interview Cake',
            images: interviewCake,
            scale: 75
        },
        {
            id: 7,
            name: 'Sargent College',
            images: sargent,
            scale: 75
        }
    ]

    return(
        // <div className="flex justify-center items-center flex-col mb-40">
        <section id="sponsors" className="font-pp ssw-full flex flex-col items-center justify-center text-primary px-5 my-[10rem] mt-80 max-sm:mt-0 mb-40 text-white mt-10 w-full max-w-4xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mx-auto">
            <Title>OUR SPONSORS</Title>
            <div className="grid z-10 grid-cols-2 lg:grid-cols-2 gap-14 lg:gap-20 mt-20 mx-[5vw]">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="relative flex items-center justify-center lg:w-60 lg:h-60"> {/* Adjust size for desktop */}
                        <Image
                            src={sponsorBackground}
                            alt="sponsor"
                            className="w-32 h-32 lg:w-96 lg:h-96 mx-auto" // Larger size for desktop
                        />
                        <Image
                            src={sponsor.images}
                            alt={sponsor.name}
                            className={`absolute top-50 left-0 object-cover scale-${sponsor.scale} md:scale-${sponsor.scale+10}`} // Adjust scaling for desktop
                        />
                        
                        <span
                            className={`absolute right-[-20px] top-50% transform -translate-y-1/2 text-s text-center ${sponsor.id % 2 === 1 ? 'left-[-25px]' : 'right-[-25px]'}`}
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', whiteSpace: 'nowrap' }}>
                            {sponsor.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    //   </div>
    )
};

export default Sponsors;