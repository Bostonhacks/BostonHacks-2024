import { React } from 'react';
import '../../public/fonts/fonts.css';

import hold from '../../public/images/Q.svg';
import sponsorBackground from '../../public/images/sponsorBackground.svg';

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
        }
    ]

    return(
        // <div className="flex justify-center items-center flex-col mb-40">
        <section id="sponsors" className="font-pp ssw-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem] mt-80 max-sm:mt-0 mb-40">
                <div className="flex items-center w-full max-w-xl relative">
                    <div className="flex-1 border-b-2 border-white mt-[2rem]"></div>
                    <h2 className="text-center text-3xl md:text-5xl pb-1 px-12">OUR SPONSORS</h2>
                    <div className="flex-1 border-b-2 border-white mt-[2rem]"></div>
                </div>
            <div className="grid z-10 grid-cols-2 lg:grid-cols-2 gap-14 lg:gap-20 mt-20 mx-[5vw]">
            {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="relative">
                <img
                src={"/images/sponsorBackground.svg"}
                alt="sponsor"
                className="w-32 h-32 mx-auto"
                />
                <img
                src={sponsor.image}
                alt={`Sponsor ${sponsor.id}`}
                className="absolute w-auto h-auto top-0 left-0 object-cover scale-75"
                />
                <span className={`absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-xs text-center ${sponsor.id % 2 === 1 ? 'left-[-20px]' : 'right-[-20px]'}`}  style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', whiteSpace: 'nowrap'}}>
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