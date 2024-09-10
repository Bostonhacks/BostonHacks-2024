import { React } from 'react';
import Image from 'next/image';

import section from '@/public/images/section.svg';
import ApplyButton from "@/public/images/Apply2.svg";

const Astronaut = () => {
    return (
        <div className="relative w-full h-[1300px] overflow-hidden">
            <Image 
                src={section}
                alt="stuff"
                className="absolute left-[50%]"
                layout="fill"
                objectFit="contain"
                style={{ zIndex: 1 }}
            />
            <div className="cursor-pointer absolute left-[50%] top-[45%] transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }}>
                <Image
                    src={ApplyButton}
                    alt="Apply Button"
                    width={250}  // Adjust based on your SVG size
                    height={200}  // Adjust based on your SVG size
                />
            </div>
        </div> 
    );
};

export default Astronaut;
