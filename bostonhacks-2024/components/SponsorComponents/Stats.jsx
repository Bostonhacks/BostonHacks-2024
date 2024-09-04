import Image from 'next/image';
import PrecovidStats from '@/public/images/PrecovidStats.svg';
import HybridStats from '@/public/images/HybridStats.svg';

const Stats = () => {
    return (
        <div className='relative flex flex-col justify-center items-center mb-24 lg:mb-80'>
        
        {/* Header Section with Lines */}
        <div className="flex items-center justify-center space-x-4 mb-10">
            {/* Left Line */}
            <div className="w-20 lg:w-40 h-px bg-white"></div>
            {/* Title with Line Break */}
            <h1 className="font-minecraft text-white text-base lg:text-7xl mb-4 text-center">
                LET'S TALK<br />STATISTICS
            </h1>
            {/* Right Line */}
            <div className="w-20 lg:w-40 h-px bg-white"></div>
        </div>

        {/* Pre-COVID Event Section */}
        <div className="text-center w-full">
            <h2 className="font-minecraft text-white text-sm lg:text-5xl mb-6">Our Pre-COVID Events Had:</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0 lg:space-x-10">
                {/* Enlarging the image container to fill most of the screen */}
                <div className="relative w-4/5 h-[1000px] lg:h-[1750px] lg:w-[75%]">
                    <Image src={PrecovidStats} alt="Pre-COVID Stats" layout="fill" objectFit="contain" />
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className='my-10 w-full lg:w-1/2 border-t-4 border-gray-500'></div>

        {/* 2021 Hybrid Event Section */}
        <div className="text-center w-full">
            <h2 className="font-minecraft text-white text-sm lg:text-5xl mb-6">Our 2021 Hybrid Event Had...</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0 lg:space-x-10">
                {/* Enlarging the image container to fill most of the screen */}
                <div className="relative w-4/5 h-[1000px] lg:h-[1500px] lg:w-[75%]">
                    <Image src={HybridStats} alt="Hybrid Event Stats" layout="fill" objectFit="contain" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Stats;
