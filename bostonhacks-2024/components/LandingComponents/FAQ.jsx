"use client";
// okay i dont think this is showing up anywhere because there literally is no landing page component

import { React, useState } from 'react';
import Image from 'next/image';
//i literally dont know whyt his isnt working
import DownToggle from "@/public/images/DownToggle.svg";
import UpToggle from '@/public/images/UpToggle.svg';
import Astroid from '@/public/images/Q.svg'

// this should probabaly be in main/app root file but idk if i have the authority to do that so im just gonna put this here first
import '../../public/fonts/fonts.css';

const faq =[
        {
            question: 'What is BostonHacks',
            answer: 'BostonHacks is a 24-hour event where students from different backgrounds gather together to use technology to create cool projects. Come to BostonHacks to expand your knowledge and skills, make new friends, win prizes and network with recruiters from our corporate sponsors!'
        },
        {
            question: 'When and where is BostonHacks?',
            answer: 'BostonHacks is an in-person 24-hour hackathon on November 2-3rd, 2024. It takes place in the Boston University George Sherman Union (GSU)'
        },
        {
            question: 'Who can attend?',
            answer: 'All college students including undergraduate and graduate students with any background, all across the world are welcome!'
        },
        {
            question: 'Are there any rules?',
            answer: 'We want to ensure a positive experience for all participants. We encourage you to read the MLH Code of Conduct.'
        },
        {
            question: 'Do I need experience?',
            answer: 'No experience is necessary. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks!'
        },
        {
            question: 'Does it cost anything?',
            answer: 'BostonHacks is 100% free. You dont have to spend a dime! Unfortunately, we wont be providing any travel reimbursements this year.'
        },
        {
            question: 'Can we form teams?',
            answer: 'Of course you can! We encourage people to work in teams of up to four people. You may opt-in to team formation through our Discord Server which will match you with an ideal team. You can work alone, but it wont be as fun :['
        },
        {
            question: 'When does registration close?',
            answer: 'Registration closes on October. Apply ASAP!'
        }
    ];

const Question = ({ question, answer }) => {
    // set up the state (set up as not toggled)
    const [expanded, setExpanded] = useState(false);
    const [animate, setAnimate] = useState(false);

    // handle the toggle
    const handleClick = () => {
        setExpanded(!expanded);
        setAnimate(true);
        console.log('clicked');
    }

    return (
        <li onClick={handleClick} className="py-5 flex flex-col hover:cursor-pointer group border-b-2 border-gray-300">
            <div className="flex mt-2 justify-between">
                <div className="flex w-full">
                    <Image src= {Astroid} alt="Q: "/>
                    <h3 className="text-4xl md:text-3xl">
                        {question}
                    </h3>
                </div>
                <Image
                src={expanded ? UpToggle : DownToggle} 
                alt="toggle arrows"
                className={`w-[48px] h-[41px] ${animate && 'animate-wiggle'}`}
                onAnimationEnd={() => {
                    setExpanded(!expanded);
                    setAnimate(false);
                }}
                />  

            </div>
                {expanded && 
                    <div className="border-t-2 border-white/25">
                        <p className="px-12 pt-5 text-2xl">{answer}</p>
                    </div>
                }
        </li>

    // the below is previous bhacks
    //     <li
    //   className="px-3 hover:cursor-pointer border-text-primary flex flex-row py-5 group justify-between"
    //   onClick={handleClick}
    // >
    //   <div className="flex flex-col mt-2">
    //     <h3 className="text-lg md:text-xl">{question}</h3>

    //     <div
    //       className={`pt-0 overflow-hidden transition-all duration-500 ease-in-out ${
    //         expanded ? 'max-h-screen' : 'max-h-0'
    //       }`}
    //     >
    //       <p className="mt-3">{answer}</p>
    //     </div>
    //   </div>
    //   <img
    //     src={expanded ? OpenChest : ClosedChest}
    //     alt="Closed Chest"
    //     className={`w-[48px] h-[41px] ${animate && 'animate-wiggle'}`}
    //     onAnimationEnd={() => {
    //       setExpanded(!expanded);
    //       setAnimate(false);
    //     }}
    //   />
    // </li>
    );
};

const FAQColumn = ({ questionAnswers }) => {

    return (
      <div className="">
        <ul className="">
          {questionAnswers.map((qa, index) => (
            <Question question={qa.question} answer={qa.answer} key={index} />
          ))}
        </ul>
      </div>
    );
  };

  const FAQ = () => {
    // the only way i can figure out how to have two columns is by slicing
    const col1 = faq.slice(0, Math.ceil(faq.length / 2));
    const col2 = faq.slice(Math.ceil(faq.length / 2));
    console.log('First Column:', col1);
    console.log('Second Column:', col2);


    return (
    <div className="flex items-center justify-center max-h-xl">
        <div className="bg-black bg-opacity-20 w-[95%] h-auto pt-16"> 
            <section id="faq" className="font-ppSupplyMono w-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem] mt-0">
                <div className="flex items-center w-full max-w-xl relative">
                    <div className="flex-1 border-b-2 border-white mt-[2rem]"></div>
                    <h2 className="text-center text-4xl md:text-6xl pb-1 px-12">FAQ</h2>
                    <div className="flex-1 border-b-2 border-white mt-[2rem]"></div>
                </div>
                <div className="font-cg mt-[5rem] w-full grid md:grid-cols-2 grid-cols-1 gap-x-[2rem] z-20 lg:gap-x-[3rem] md:px-[2rem]">
                    <FAQColumn questionAnswers={col1}/>
                    <FAQColumn questionAnswers={col2} />
                </div>
                <div className="border-b-4 border-text-primary md:hidden" />
            </section>
        </div>
    </div>
    );
  };
  
  export default FAQ;