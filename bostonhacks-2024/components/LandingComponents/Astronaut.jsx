import { React } from 'react';
import Image from 'next/image';

import SpaceGuy from '@/public/images/astronaut.png';
import Rocket from '@/public/images/rocket.svg';
import v1 from '@/public/images/vector1.svg';
import v2 from '@/public/images/vector2.svg';
import ellipses from '@/public/images/ellipses.svg';
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
            <div className="cursor-pointer absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }}>
                <Image
                    src={ApplyButton}
                    alt="Apply Button"
                    width={250}  // Adjust based on your SVG size
                    height={200}  // Adjust based on your SVG size
                />
            </div>
            {/* <Image 
                src={SpaceGuy}
                alt="astronaut"
                className="absolute w-[600px] left-[5%] transform rotate-[-5deg]"
            />
            <Image  
                src={Rocket}
                alt="rocket"
                className="absolute w-[100px] bottom-[20%] right-[20%]"
            />
            <Image
                src={v1}
                alt="rocket path"
                className="absolute w-[500px] top-[27%] right-[18%]"
            />
            <Image 
                src={v2}
                alt="rocket path"
                className="absolute w-[500px] top-[30%] right-[20%]"
            />
            <Image 
                src={ellipses}
                alt="ellipses"
                className="absolute w-[150px] top-[85%] left-[50%]"
            /> */}
        </div> 
    );
};

export default Astronaut;
