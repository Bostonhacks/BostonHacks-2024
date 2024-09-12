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
    <div className="flex flex-col space-y-12 sm:px-8 lg:px-64 py-16"> {/* Added padding here */}
      
      {/* First Block: Left Justified */}
      <div className="w-full text-left text-white lg:text-5xl max-w-5xl">
        <p className="font-carroisGothic text-5xl">*General Email:</p>
        <p className="mt-2 font-carroisGothic">
          Prior to the event, we&apos;ll send out one email listing all of our sponsors and any prizes offered, 
          and a short summary of each sponsor. If you&apos;d like to email students directly, see the $5k and $7.5k tiers.
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
    <div>
    <div className="w-full sm:w-4/5 lg:w-auto mx-auto flex justify-center"> {/* Ensure consistent width and centering */}
      <div className="w-full sm:w-full lg:w-[500px] mx-4 flex-shrink-0 lg:bg-black lg:bg-opacity-50 md:bg-opacity-0 sm:bg-opacity-0 px-5 py-10">
        {/* Amount and Title */}
        <div className="mt-8 sm:py-2 lg:py-0 text-white p-0 lg:p-10 rounded-lg shadow-lg">
          <h2 className="text-center text-5xl font-ppSupplyMono">${amount}</h2>
          <h3 className="text-center text-3xl mt-4 font-carroisGothic">{title}</h3>
        </div>

        {/* Perks List */}
        <div className="lg:bg-opacity-0 md:bg-black md:bg-opacity-50 sm:bg-black sm:bg-opacity-50 p-5 rounded-lg mt-8">
          <ul className="mt-8 space-y-4 text-xl leading-[1.5] font-carroisGothic text-white">
            {perks.map((perk, index) => (
              <li
                key={index}
                className={`${
                  perk.noBullet
                    ? 'pl-10' // No background or bullet
                    : 'flex items-start'
                }`}
              >
                {/* Make sure the bullet icon size stays consistent */}
                {!perk.noBullet && (
                  <div className="flex-shrink-0 mr-5">
                    <Image
                      src={BulletIcon}
                      alt="Bullet Icon"
                      width={45}
                      height={45}
                    />
                  </div>
                )}
                <span className={perk.underline ? 'underline' : ''}>
                  {perk.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center sm:py-2 lg:py-0">
          <button className="transition duration-500 hover:scale-110">
            <Image src={buttonImage} alt={buttonAltText} height={50} />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};




const Perks = () => {
  const perksData = [
    {
      amount: '500',
      title: 'Sneak Peek',
      perks: [
        { text: 'General Email', noBullet: false, underline: false },
        { text: 'Distribute Swag', noBullet: false, underline: false },
        { text: 'Distribute API', noBullet: false, underline: false },
        { text: 'Logo on Website & T-Shirt', noBullet: false, underline: false }, // Underlined and no bullet
      ],
      buttonImage: SneakPeakButton,
      buttonAltText: 'Choose Sneak Peek',
    },
    {
      amount: '1.5K',
      title: 'Novice',
      perks: [
        { text: 'Everything included in Sneak Peek, and...', noBullet: true, underline: true }, // Underlined and no bullet
        { text: 'Give branded/API prize (Less than $100 prize/person)', noBullet: false, underline: false },
        { text: 'Bring 2 Mentors', noBullet: false, underline: false },
        { text: 'Emails to distribute recruiting materials for post-event', noBullet: false, underline: false },
      ],
      buttonImage: NoviceButton,
      buttonAltText: 'Choose Novice',
    },
    {
      amount: '3K',
      title: 'Skilled',
      perks: [
        { text: 'Everything included in Sneak Peek, and...', noBullet: true, underline: true }, // Underlined and no bullet
        { text: 'Give branded/API prize (Less than $100 prize/person)', noBullet: false, underline: false },
        { text: 'Bring 4 Mentors', noBullet: false, underline: false },
        { text: 'Emails to distribute recruiting materials for post-event', noBullet: false, underline: false },
        { text: 'Bring 1 Recruiter', noBullet: false, underline: false },
        { text: '2 min speak at opening ceremony (Can be pre-recorded or live)', noBullet: false, underline: false },
        { text: '1 table', noBullet: false, underline: false },
        { text: 'Post-event access to resumes', noBullet: false, underline: false },
      ],
      buttonImage: SkilledButton,
      buttonAltText: 'Choose Skilled',
    },
    {
      amount: '4.5K',
      title: 'Master',
      perks: [
        { text: 'Everything included in Sneak Peek, and...', noBullet: true, underline: true }, // Underlined and no bullet
        { text: 'Give branded/API prize (Less than $100 prize/person)', noBullet: false, underline: false },
        { text: 'Bring unlimited Mentors', noBullet: false, underline: false },
        { text: 'Emails to distribute recruiting materials for pre-event', noBullet: false, underline: false },
        { text: 'Bring 2 Recruiters', noBullet: false, underline: false },
        { text: '4 min speak at opening ceremony (Can be pre-recorded or live)', noBullet: false, underline: false },
        { text: '1 table', noBullet: false, underline: false },
        { text: 'Pre-event access to resumes', noBullet: false, underline: false },
        { text: 'Host special side challenges', noBullet: false, underline: false },
        { text: 'Virtual interview rooms', noBullet: false, underline: false },
        { text: 'Email Hackathon attendees', noBullet: false, underline: false },
        { text: 'Branded virtual events', noBullet: false, underline: false },
      ],
      buttonImage: MasterButton,
      buttonAltText: 'Choose Master',
    },
    {
      amount: '6K',
      title: 'Legendary',
      perks: [
        { text: 'Everything included in Sneak Peek, and...', noBullet: true, underline: true }, // Underlined and no bullet
        { text: 'Give branded/API prize (Less than $100 prize/person)', noBullet: false, underline: false },
        { text: 'Bring unlimited Mentors', noBullet: false, underline: false },
        { text: 'Emails to distribute recruiting materials for pre-event', noBullet: false, underline: false },
        { text: 'Bring 4 Recruiters', noBullet: false, underline: false },
        { text: '6 min speak at opening ceremony (Can be pre-recorded or live)', noBullet: false, underline: false },
        { text: '2 tables', noBullet: false, underline: false },
        { text: 'Pre-event access to resumes', noBullet: false, underline: false },
        { text: 'Host special side challenges', noBullet: false, underline: false },
        { text: 'Virtual interview rooms', noBullet: false, underline: false },
        { text: 'Email Hackathon attendees', noBullet: false, underline: false },
        { text: 'Branded virtual events', noBullet: false, underline: false },
        { text: 'Sponsor Track (contact us!)', noBullet: false, underline: false },
        { text: 'Pre-event workshop', noBullet: false, underline: false },
      ],
      buttonImage: LegendaryButton,
      buttonAltText: 'Choose Legendary',
    },
  ];
  

    return (
    <div className="w-full py-16 px-4 lg:px-16">
      <div className="flex justify-center items-center mb-12">
        <div className="w-32 border-t-4 border-white"></div> {/* Adjust the width here */}
        <span className="text-4xl lg:text-7xl font-bold tracking-wide text-white text-center font-ppSupplyMono leading-loose py-10">
          SPONSORSHIP <br /> OPPORTUNITIES
        </span>
        <div className="w-32 border-t-4 border-white"></div> {/* Adjust the width here */}
      </div>
      
      {/* Horizontal Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-wrap lg:flex-nowrap space-x-8 lg:space-x-8"> {/* Use flex-wrap for mobile view */}
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
