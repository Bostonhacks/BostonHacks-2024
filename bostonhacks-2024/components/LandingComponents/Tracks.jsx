"use client";
import React, { useState } from "react";
import Image from "next/image";
import planet1 from "../../public/images/tracks/planet1.svg";
import planet2 from "../../public/images/tracks/planet2.svg";
import planet3 from "../../public/images/tracks/planet3.svg";
import tracksBackground from "@/public/images/tracks/TracksBackground.png";
import Title from "./Title";

function Tracks() {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const planetsTextBoxStyle = {
    "--background": "0, 0, 0, 1",
    "--highlight": "69 232 113",
    "--bg-color":
      "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
    "--border-color": `linear-gradient(160deg,
          rgb(var(--highlight)) 0%,
          rgb(var(--highlight) / 1) 40%,
          rgb(var(--highlight) / 0.3) 66.660%,
          rgb(var(--highlight) / 0.1) 100%)
        `,
  };

  const planetsTextBoxCSS = `
      rounded-lg border border-transparent text-center p-4 text-2xl 
      backdrop-filter backdrop-blur-3xl
      [background:padding-box_var(--bg-color),border-box_var(--border-color)]`;

  const pathDescription = {
    "Reimagine Reality": `Our greatest strength as humans lies in our ability to innovate. As we set our sights on exploring the stars, we must refine existing products and technologies to meet new demands and operational challenges. Today, the world is filled with countless established products and applications. But have you ever wished an app had a feature it lacked? Or thought you could design it better if you were the creator? Now&apos;s your chance to unleash the inner creator in you and turn those ideas into reality! 
<br /><br />In this track, you can take existing products and applications and transform them into something entirely different. Add new features, reimagine interfaces, or discover novel uses &ndash; this track is all about pushing the boundaries and reimagining current reality: <br /><br />

    &ndash; If you were the creator, what changes would you make or like to see?<br />
    &ndash; What features have you always wished an existing product or app had? <br />
    &ndash; Are there any underutilized features that could be improved or repurposed?<br />
    &ndash; What common problems do users face with the current product, and how can you solve them?<br />
    &ndash; What new industries or fields could benefit from this product with some modifications?<br />
    &ndash; How can you make the user experience smoother or more intuitive?<br />
    &ndash; What new industries or fields could benefit from this product with some modifications?<br />`,

    Cometcare: `Space travel can be physically, mentally, and emotionally damaging. Astronauts must train for microgravity or zero-gravity environments, prepare for long missions, and cope with separations from loved ones indefinitely. Thus, prioritizing their wellbeing is essential. <br /><br />In this track, we challenge you to design a product or application that enhances wellness for astronauts &ndash; and anyone else! Whether you focus on fitness, exercise, journaling, or stress management, explore innovative avenues that blend technology and wellness. Create solutions that make healthy living accessible and engaging on Earth and beyond!<br /><br /> 

    &ndash; What aspect of overall wellness would you like to focus on? Examples include emotional, physical, financial, social, intellectual, and spiritual wellness, but feel free to be more specific or broad as you see fit!<br />
    &ndash; How can you ensure a clean and intuitive user experience that enhances accessibility and dissuades frustration?<br />
    &ndash; How can current approaches to wellbeing and wellness be adapted for new environments and new users (like maybe… aliens)?<br />
    &ndash; How can we leverage existing technologies to aid communication and combat isolation and loneliness during extended trips?<br />
    &ndash;What platforms, tools, games, or activities would most effectively facilitate social interaction, promote community, and reduce feelings of isolation?<br />`,

    "Interstellar Intelligence": `The new &apos;Space Race&apos; is fueling rapid technological development as humanity looks to make space travel safer, faster, and more efficient. At the forefront of this surge is machine learning and AI, which have already revolutionized the technology industry by sparking continuous innovation and yielding remarkable products. Whether you&apos;re addressing pollution on Earth, classifying astronomical phenomena, managing space debris, the possibilities are limitless. Embrace the challenge to develop and deploy ML/AI models that tackle everyday issues and push the boundaries of what&apos;s possible in space.<br /><br />
    
    &ndash; How can you leverage ML/AI to identify, classify, and/or track different types of space threats and junk (debris, defunct satellites) that we might make?<br />
    &ndash; How can you design an AI-driven system to manage and respond to large-scale emergencies, such as natural disasters, using predictive models and real-time data integration to optimize resource allocation and response efforts?<br />
    &ndash; How can ML/AI be used to improve health-monitoring and medical care for at-risk and high-stress populations?<br />
    &ndash; What innovative ML/AI applications could transform how we experience and interact with entertainment, such as movies, music, or games?<br />
    &ndash; What ML/AI applications could revolutionize travel and navigation experiences, making them more personalized and efficient?<br />`,
  };

  const showPopUp = (planet) => {
    setModalContent(planet);
    setShowModal(true);
  };

  const closePopUp = () => {
    setShowModal(false);
  };

  return (
    <div id="tracks">
      <Title>TRACKS</Title>
      <div
        className="flex flex-col font-carroisGothic"
        style={{
          backgroundImage: `url(${tracksBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Track 1 */}
        <div className="w-1/3 flex flex-col items-center self-end mr-20">
          <h1 style={planetsTextBoxStyle} className={planetsTextBoxCSS}>
            Reimagine Reality
          </h1>
          <Image
            src={planet1}
            alt="planet1"
            className="cursor-pointer"
            onClick={() => showPopUp("Reimagine Reality")}
          />
        </div>

        {/* Track 2 */}
        <div className="w-1/3 items-center flex flex-col ml-32">
          <h1 style={planetsTextBoxStyle} className={planetsTextBoxCSS}>
            Cometcare
          </h1>
          <Image
            src={planet2}
            alt="planet2"
            className="cursor-pointer"
            onClick={() => showPopUp("Cometcare")}
          />
        </div>

        {/* Track 3 */}
        <div className="w-1/3 flex flex-col items-center self-end mr-60">
          <h1 style={planetsTextBoxStyle} className={planetsTextBoxCSS}>
            Interstellar Intelligence
          </h1>
          <Image
            src={planet3}
            alt="planet3"
            className="cursor-pointer"
            onClick={() => showPopUp("Interstellar Intelligence")}
          />
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
          onClick={closePopUp}
        >
          <div
            className="bg-black bg-opacity-90 border border-emerald-400 p-4 sm:p-6 rounded-lg max-w-sm sm:max-w-lg w-11/12 sm:w-full backdrop-filter backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-emerald-400 pb-4 sm:pb-6 text-2xl sm:text-3xl">
              {modalContent}
            </h1>
            <p
              className="text-white text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: pathDescription[modalContent] }}
            ></p>
            <button
              className="mt-4 sm:mt-6 text-emerald-400 underline"
              onClick={closePopUp}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tracks;
