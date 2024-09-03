import React from 'react';
import Image from 'next/image';

// Import your custom assets
import BulletIcon from '@/public/images/bullet-point.svg';
import SneakPeakButton from '@/public/images/SneakPeakButton.svg';
import NoviceButton from '@/public/images/NoviceButton.svg';
import SkilledButton from '@/public/images/SkilledButton.svg';
import MasterButton from '@/public/images/MasterButton.svg';
import LegendaryButton from '@/public/images/LegendaryButton.svg';

const PerkCard = ({ amount, title, perks, buttonImage, buttonAltText }) => {
  return (
    <div className="bg-black bg-opacity-50 text-white p-10 rounded-lg shadow-lg w-[500px] mx-4 flex-shrink-0">
      <div className="mt-8"> 
        <h2 className="text-center text-5xl font-bold">${amount}</h2>
        <h3 className="text-center text-3xl mt-4">{title}</h3> 
      </div>
      <ul className="mt-8 space-y-4 text-xl leading-[1.5]"> 
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

const SponsorshipOpportunities = () => {
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
        <div className="flex-grow border-t-4 border-white"></div>
        <span className="mx-4 text-7xl lg:text-5xl font-bold tracking-wide text-white text-center">
          SPONSORSHIP <br /> OPPORTUNITIES
        </span>
        <div className="flex-grow border-t-4 border-white"></div>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8">
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
    </div>
  );
};

export default SponsorshipOpportunities;
