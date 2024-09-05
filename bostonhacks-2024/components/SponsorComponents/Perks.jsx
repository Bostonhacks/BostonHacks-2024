import React from 'react';
import Image from 'next/image';

// Import your custom assets
import BulletIcon from '@/public/images/bullet-point.svg';
import SneakPeakButton from '@/public/images/SneakPeakButton.svg';
import NoviceButton from '@/public/images/NoviceButton.svg';
import SkilledButton from '@/public/images/SkilledButton.svg';
import MasterButton from '@/public/images/MasterButton.svg';
import LegendaryButton from '@/public/images/LegendaryButton.svg';

// Text Section Component
const TextSection = () => {
  return (
    <div className="flex flex-col space-y-12 px-32 lg:px-64 py-64"> {/* Added padding here */}
      
      {/* First Block: Left Justified */}
      <div className="w-full text-left text-white lg:text-5xl max-w-5xl">
        <p className="font-carroisGothic text-5xl">*General Email:</p>
        <p className="mt-2 font-carroisGothic">
          Prior to the event, we’ll send out one email listing all of our sponsors and any prizes offered, 
          and a short summary of each sponsor. If you’d like to email students directly, see the $5k and $7.5k tiers.
        </p>
      </div>

      {/* Second Block: Right Justified */}
      <div className="w-full flex justify-end">
        <div className="text-right text-white lg:text-5xl max-w-5xl">
          <p className="font-carroisGothic text-5xl">**Special Side Event:</p>
          <p className="mt-2 font-carroisGothic">
            This can be a fun, non-hacking virtual challenge, e.g. giving out a puzzle to solve, a coding challenge, 
            or asking attendees to send in a photo of themselves doing something fun. Or, you could also host a workshop 
            on an API or technology you might want to present.
          </p>
        </div>
      </div>

      {/* Third Block: Left Justified */}
      <div className="w-full text-left text-white lg:text-5xl max-w-5xl">
        <p className="font-carroisGothic text-5xl">Early Bird:</p>
        <p className="mt-2 font-carroisGothic">
          If your contribution is received by Aug 19th, 2022, we will display your company branding at public fall events 
          such as the BU student activities fair (attended by thousands of BU students).
        </p>
      </div>
      
    </div>
  );
};


const PerkCard = ({ amount, title, perks, buttonImage, buttonAltText }) => {
  return (
    <div className="bg-black bg-opacity-50 text-white p-10 rounded-lg shadow-lg w-[500px] mx-4 flex-shrink-0">
      <div className="mt-8"> 
        <h2 className="text-center text-5xl font-ppSupplyMono">${amount}</h2>
        <h3 className="text-center text-3xl mt-4 font-carroisGothic">{title}</h3> 
      </div>
      <ul className="mt-8 space-y-4 text-xl leading-[1.5] font-carroisGothic"> 
        {perks.map((perk, index) => (
          <li key={index} className="flex items-start">
            <Image src={BulletIcon} alt="Bullet Icon" width={45} className="mr-5" />
            {perk}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center"> 
        <button className="transition duration-500 hover:scale-110">
          <Image src={buttonImage} alt={buttonAltText} height={50} />
        </button>
      </div>
    </div>
  );
};

const Perks = () => {
  const perksData = [
    {
      amount: '500',
      title: 'Sneak Peek',
      perks: ['General Email', 'Distribute Swag', 'Distribute API', 'Logo on Website & T-Shirt'],
      buttonImage: SneakPeakButton,
      buttonAltText: 'Choose Sneak Peek',
    },
    {
      amount: '1.5K',
      title: 'Novice',
      perks: [
        'Everything included in Sneak Peek, and...',
        'Give branded/API prize (Less than $100 prize/person)',
        'Bring 2 Mentors',
        'Emails to distribute recruiting materials for post-event',
      ],
      buttonImage: NoviceButton,
      buttonAltText: 'Choose Novice',
    },
    {
      amount: '3K',
      title: 'Skilled',
      perks: [
        'Everything included in Sneak Peek, and...',
        'Give branded/API prize (Less than $100 prize/person)',
        'Bring 4 Mentors',
        'Emails to distribute recruiting materials for post-event',
        'Bring 1 Recruiter',
        '2 min speak at opening ceremony (Can be pre-recorded or live)',
        '1 table',
        'Post-event access to resumes',
      ],
      buttonImage: SkilledButton,
      buttonAltText: 'Choose Skilled',
    },
    {
      amount: '4.5K',
      title: 'Master',
      perks: [
        'Everything included in Sneak Peek, and...',
        'Give branded/API prize (Less than $100 prize/person)',
        'Bring unlimited Mentors',
        'Emails to distribute recruiting materials for pre-event',
        'Bring 2 Recruiters',
        '4 min speak at opening ceremony (Can be pre-recorded or live)',
        '1 table',
        'Pre-event access to resumes',
        'Host special side challenges',
        'Virtual interview rooms',
        'Email Hackathon attendees',
        'Branded virtual events',
      ],
      buttonImage: MasterButton,
      buttonAltText: 'Choose Master',
    },
    {
      amount: '6K',
      title: 'Legendary',
      perks: [
        'Everything included in Sneak Peek, and...',
        'Give branded/API prize (Less than $100 prize/person)',
        'Bring unlimited Mentors',
        'Emails to distribute recruiting materials for pre-event',
        'Bring 4 Recruiters',
        '6 min speak at opening ceremony (Can be pre-recorded or live)',
        '2 tables',
        'Pre-event access to resumes',
        'Host special side challenges',
        'Virtual interview rooms',
        'Email Hackathon attendees',
        'Branded virtual events',
        'Sponsor Track (contact us!)',
        'Pre-event workshop',
      ],
      buttonImage: LegendaryButton,
      buttonAltText: 'Choose Legendary',
    },
  ];

    return (
    <div className="w-full py-16 px-4 lg:px-16">
      <div className="flex justify-center items-center mb-12">
        <div className="w-32 border-t-4 border-white"></div> {/* Adjust the width here */}
        <span className="mx-4 text-7xl lg:text-7xl font-bold tracking-wide text-white text-center font-ppSupplyMono leading-loose py-10">
          SPONSORSHIP <br /> OPPORTUNITIES
        </span>
        <div className="w-32 border-t-4 border-white"></div> {/* Adjust the width here */}
      </div>
      
      {/* Horizontal Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8"> {/* Flex for horizontal layout */}
          {perksData.map((perk, index) => (
            <PerkCard
              key={index}
              amount={perk.amount}
              title={perk.title}
              perks={perk.perks}
              buttonImage={perk.buttonImage}
              buttonAltText={perk.buttonAltText}
            />
          ))}
        </div>
      </div>
      
      {/* Add the text section here */}
      <TextSection />
      
    </div>
  );
};

export default Perks;
