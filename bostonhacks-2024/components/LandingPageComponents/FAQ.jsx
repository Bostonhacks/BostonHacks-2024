"use client";
// okay i dont think this is showing up anywhere because there literally is no landing page component

import { React, useState } from 'react';
import DownToggle from '../../public/images/DownToggle.png';
import UpToggle from '../../public/images/UpToggle.png';

// this should probabaly be in main/app root file but idk if i have the authority to do that so im just gonna put this here first
import '../../public/fonts/fonts.css';

const faq =[
        {
            question: 'q1',
            answer: 'a1'
        },
        {
            question: 'q2',
            answer: 'a2'
        },
        {
            question: 'q3',
            answer: 'a3'
        },
        {
            question: 'q4',
            answer: 'a4'
        },
        {
            question: 'q5',
            answer: 'a5'
        },
        {
            question: 'q6',
            answer: 'a6'
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
        <li className="py-5 flex flex-col hover:cursor-pointer group border-b-2 border-gray-300">
            <div className="flex flex-col mt-2">
                <h3 onClick={handleClick} className="text-lg md:text-xl">
                    {question}
                </h3>
                {expanded && <p>{answer}</p>}
            </div>
            <img
                src={expanded ? UpToggle : DownToggle} 
                alt="toggle arrows"
                className={`w-[48px] h-[41px] ${animate && 'animate-wiggle'}`}
                onAnimationEnd={() => {
                    setExpanded(!expanded);
                    setAnimate(false);
                }}
                />  
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
        {/* <div className="flex justify-end md:hidden mt-10">
          <img src={chestIsland} alt="chestIsland" className="h-64" />
        </div> */}
        <div className="bg-black bg-opacity-20 w-[95%] h-[50%]]">
            <section id="faq" className="font-pp ssw-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem] mt-80 max-sm:mt-0">
            <div className="flex items-center w-full max-w-xl relative">
                    <div className="flex-1 border-b-2 border-white mt-[2rem]"></div>
                    <h2 className="text-center text-3xl md:text-5xl pb-1 px-12">FAQ</h2>
                    <div className="flex-1 border-b-2 border-white mt-[2rem]"></div>
                </div>
                    <div className="mt-[5rem] w-full grid md:grid-cols-2 grid-cols-1 gap-x-[5rem] z-20 lg:gap-x-[10rem] md:px-[5rem]">
                        <FAQColumn questionAnswers={col1}/>
                        <FAQColumn questionAnswers={col2} />
                    </div>
                    <div className="border-b-4 border-text-primary md:hidden" />
            </section>
        </div>
      </div>
    );c
  };
  
  export default FAQ;