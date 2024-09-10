import { React } from 'react';
import '../../public/fonts/fonts.css';
import Image from 'next/image';
import Title from '@/components/LandingComponents/Title.jsx';

import hold from '@/public/images/saturn.png';
import sponsorBackground from '@/public/images/sponsorBackground.svg';

const Sponsors = () => {
    const sponsors = [
        {
            id: 1,
            name: 'Sponsor One',
            images: hold
        },
        {
            id: 2,
            name: 'Sponsor Two',
            images: hold
        },
        {
            id: 3,
            name: 'Sponsor Three',
                images: hold
        },
        {
            id: 4,
            name: 'Sponsor Four',
            images: hold
        },
        {
            id: 5,
            name: 'Sponsor Five',
            images: hold
        },
        {
            id: 6,
            name: 'Sponsor Six',
            images: hold
        }
    ]

    return(
        // <div className="flex justify-center items-center flex-col mb-40">
        <section id="sponsors" className="font-pp ssw-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem] mt-80 max-sm:mt-0 mb-40 text-white mt-10 w-full max-w-4xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg  mx-auto ">
            <Title>OUR SPONSORS</Title>
            <div className="grid z-10 grid-cols-2 lg:grid-cols-2 gap-14 lg:gap-20 mt-20 mx-[5vw]">
                {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="relative flex items-center justify-center">
                    <Image
                    src={sponsorBackground}
                    alt="sponsor"
                    className="w-32 h-32 mx-auto"
                    />
                    <Image
                    src={sponsor.images}
                    alt={`Sponsor ${sponsor.id}`}
                    className="absolute w-auto h-auto top-0 left-0 object-cover scale-75"
                    />
                        <span className={`absolute right-[-20px] top-50% transform -translate-y-1/2  text-xs text-center ${sponsor.id % 2 === 1 ? 'left-[-20px]' : 'right-[-20px]'}`}  style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', whiteSpace: 'nowrap'}}>
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