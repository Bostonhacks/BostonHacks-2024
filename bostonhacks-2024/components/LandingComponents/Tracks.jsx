"use client";
import React from "react";
import planet1 from "../../public/images/tracks/planet1.svg";
import planet2 from "../../public/images/tracks/planet2.svg";
import planet3 from "../../public/images/tracks/planet3.svg";
import Image from "next/image";
import { useState } from "react";
import tracksBackground from "../../public/images/tracks/TracksBackground.svg";
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
    "Reimagine Reality": `Today, there are countless established products and applications out in the world. But have you ever wished an app had a feature it lacked? Or thought you could design it better if you were the creator? Now&apos;s your chance to unleash the inner creator in you and turn those ideas into reality! In this track, you can take existing products and applications and transform them into something entirely different. Add new features, reimagine interfaces, or discover novel uses &ndash; this track is all about pushing the boundaries and changing current reality. If you were the creator, what changes would you make?<br /><br />
    &ndash; What features have you always wished an existing product or app had?<br />
    &ndash; Are there any underutilized features that could be improved or repurposed?<br />
    &ndash; What common problems do users face with the current product, and how can you solve them?<br />
    &ndash; What new industries or fields could benefit from this product with some modifications?<br />
    &ndash; How can you make the user experience smoother or more intuitive?<br />
    &ndash; Can you combine this product or application with another to create something entirely new?`,
    
    Cometcare: `Machine learning and artificial intelligence have revolutionized the technology industry, sparking continuous innovation across sectors and yielding remarkable products. This track invites you to explore the forefront of these fields, where you can harness the power of ML and AI to create solutions to everyday challenges or push the boundary to outer space, tackling space debris.<br /><br />
    &ndash; How can AI and ML be used to improve efficiency, decision-making, or user experience in a specific domain?<br />
    &ndash; What pressing challenges or opportunities can AI and machine learning address effectively today?<br />
    &ndash; What types of AI/ML algorithms or models are best suited for solving your problem?<br />
    &ndash; How will we deploy our solution for demonstration (e.g., web app, mobile app, API)?`,
    
    "Interstellar Intelligence": `In today&apos;s digital age, cybersecurity stands as a crucial guardian of our online world. Have you ever wondered how to enhance digital security or imagined yourself defending against cyber threats? This track invites you to unleash your creativity and tackle real-world security challenges. Explore the fundamentals of securing data, networks, and defending critical systems against evolving cyber threats.<br /><br />
    &ndash; What are the most pressing cybersecurity challenges faced by businesses or individuals today?<br />
    &ndash; Are there specific industries or sectors that are more vulnerable to cyber threats?<br />
    &ndash; What are common cybersecurity vulnerabilities in everyday devices and applications?<br />
    &ndash; What steps can you take to protect personal devices and data from cyber threats?<br />
    &ndash; How can you implement basic security measures like two-factor authentication or data encryption in everyday digital activities?`,
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
        className="flex flex-col"
        style={{
          backgroundImage: `url(${tracksBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
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
      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
          onClick={closePopUp}
        >
          <div
            className="bg-black bg-opacity-50  border p-5 rounded-lg max-w-lg w-full backdrop-filter backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-emerald-400 pb-10">{modalContent}</h1>
            <p className="text-white" dangerouslySetInnerHTML={{ __html: pathDescription[modalContent] }}></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tracks;
