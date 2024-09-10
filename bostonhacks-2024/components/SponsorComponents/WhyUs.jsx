import React from 'react';
import Image from 'next/image';

import Meteor from '@/public/images/meteor.svg';
import Astronaut from '@/public/images/astronaut.svg';

const whyUs = [
    [
        {
            title: 'CONNECT',
            description:
                'Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.',
        },
        {
            title: 'RECRUIT',
            description:
                'Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual\'s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.',
        },
        {
            title: 'GET LIVE FEEDBACK',
            description:
                'Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.',
        },
    ],
];

const WhySection = ({ data }) => {
    return (
        <div className="flex flex-col space-y-8 lg:space-y-8 lg:px-10 lg:py-20 w-full sm:px-2 sm:py-10">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center mx-4 lg:mx-0 p-4 lg:p-4 ${
                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                    <div className="font-carroisGothic w-full lg:w-full text-base lg:text-xl">
                        <div className={`mx-4 flex items-center mb-4 lg:mb-2 ${index % 2 == 1 ? 'justify-end' : ''}`}>
                            <Image
                                src={Meteor}
                                alt="Meteor"
                                className={`w-[20px] sm:w-[50px] mt-2 lg:mt-0 lg:w-[100px] lg:h-[100px] ${
                                    index % 2 == 1 ? 'order-last ml-4' : ''
                                }`}
                            />
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl ml-3 lg:ml-4 pt-1 font-carroisGothic">{item.title}</h2>
                        </div>
                        <p
                            className={`mx-4 lg:mx-8 text-base sm:text-lg lg:text-4xl leading-relaxed font-carroisGothic ${
                                index % 2 === 1 ? 'text-right' : 'text-left'
                            }`}
                        >
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


const WhyUs = () => {
    return (
        <div className="w-full h-auto flex items-center justify-center px-4 py-20 lg:py-80 sm:px-0">
            <div className="text-center text-white relative" style={{ width: '63%', height: 'auto' }}>
                {/* Title with lines */}
                <div className="relative flex items-center justify-center mb-8">
                    <div className="flex-grow border-t-2 sm:border-t-4 border-white"></div>
                    <span className="mx-4 sm:mx-10 text-2xl sm:text-4xl lg:text-7xl font-bold tracking-widest font-ppSupplyMono">WHY US?</span>
                    <div className="flex-grow border-t-2 sm:border-t-4 border-white"></div>
                </div>

                {/* Opaque Background and Text */}
                <div className="bg-black bg-opacity-50 p-4 lg:p-6 sm:p-1 sm:py-4 rounded-lg shadow-lg w-full h-full">
                    <WhySection data={whyUs[0]} />

                    {/* Astronaut and Questions Section */}
                    <div className="relative flex justify-center mt-12">
                        <div className="flex flex-col justify-center items-center text-center relative font-carroisGothic">
                            <h1 className="text-s lg:text-5xl mb-3">Questions?</h1>
                            <p className="text-xs lg:text-3xl">We welcome any questions or special</p>
                            <p className="text-xs lg:text-3xl">requests. Please email us at</p>
                            <h1 className="font-normal pt-2 lg:py-10 text-sm lg:text-3xl">
                                contact@bostonhacks.io
                            </h1>
                        </div>
                        <div className="absolute right-0 transform -translate-x-0 -translate-y-12 lg:-translate-x-12 lg:-translate-y-20">
                            <Image 
                            src={Astronaut} 
                            alt="Astronaut" 
                            width={500}
                            height={500}
                            className="w-[80px] sm:w-[127px] lg:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
