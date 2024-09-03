import React from 'react';
import Image from 'next/image';

import Meteor from '@/public/images/meteor.svg';
import Astronaut from '@/public/images/astronaut.svg';

const whyUs = [
    [
        {
            title: 'Connect',
            description:
                'Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.',
        },
        {
            title: 'Recruit',
            description:
                'Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual\'s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.',
        },
        {
            title: 'Get Live Feedback',
            description:
                'Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.',
        },
    ],
];

const WhySection = ({ data }) => {
    return (
        <div className="flex flex-col lg:space-y-8 lg:px-10 lg:py-20 w-full">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center mx-6 lg:mx-0 lg:p-4 ${
                        index % 2 === 1 ? 'lg:flex-row-reverse lg:text-left' : ''
                    }`}
                >
                    <div className="lg:flex-shrink-0 lg:w-full text-xl">
                        <div className={`mx-4 flex items-center mb-2.5 lg:mb-2 ${index % 2 == 1 ? 'justify-end' : ''}`}>
                            <Image
                                src={Meteor}
                                alt="Meteor"
                                className={`w-[26px] mt-2 lg:mt-0 lg:w-[100px] lg:h-[100px] ${
                                    index % 2 == 1 ? 'order-last ml-4' : ''
                                }`}
                            />
                            <h2 className="text-[11px] lg:text-5xl font-bold ml-3 lg:ml-4 pt-1">{item.title}</h2>
                        </div>
                        <p className="mx-4 lg:mx-8 text-[10px] lg:text-[24px] leading-relaxed">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const WhyUs = () => {
    return (
        <div className="w-full h-auto flex items-center justify-center px-4 py-16">
            <div className="text-center text-white relative" style={{ width: '63%', height: 'auto' }}>
                {/* Title with lines */}
                <div className="relative flex items-center justify-center mb-8">
                    <div className="flex-grow border-t-4 border-white" style={{ position: 'relative', top: '1.4em' }}></div>
                    <span className="mx-10 text-4xl lg:text-7xl font-bold tracking-widest">WHY US?</span>
                    <div className="flex-grow border-t-4 border-white" style={{ position: 'relative', top: '1.4em' }}></div>
                </div>

                {/* Opaque Background and Text */}
                <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full h-full">
                    <WhySection data={whyUs[0]} />

                    {/* Astronaut and Questions Section */}
                    <div className="relative flex justify-center mt-12">
                        <div className="flex flex-col justify-center items-center text-center relative">
                            <h1 className="text-xs lg:text-2xl mb-3">Questions?</h1>
                            <p className="text-xs lg:text-2xl">We welcome any questions or special</p>
                            <p className="text-xs lg:text-2xl">requests. Please email us at</p>
                            <h1 className="font-misterpixel font-normal pt-2 lg:py-10 text-sm lg:text-3xl">
                                contact@bostonhacks.io
                            </h1>
                        </div>
                        <div className="absolute right-0 transform -translate-x-40 -translate-y-20">
                            <Image 
                            src={Astronaut} 
                            alt="Astronaut" 
                            width={1000}
                            height={1000}
                            className="w-[127px] lg:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
