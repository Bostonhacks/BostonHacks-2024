"use client";
import React from "react";
import planet1 from "../../public/images/tracks/planet1.svg";
import planet2 from "../../public/images/tracks/planet2.svg";
import planet3 from "../../public/images/tracks/planet3.svg";
import Image from "next/image";
import { useState } from "react";
import tracksBackground from "../../public/images/tracks/TracksBackground.svg";

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
    "Reimagine Reality": "Reimagine Reality placeholder text",
    Cometcare: "Cometcare placeholder text",
    "Interstellar Intelligence": "Interstellar Intelligence placeholder text",
  };

  const showPopUp = (planet) => {
    setModalContent(planet);
    setShowModal(true);
  };

  const closePopUp = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="text-center text-4xl mb-52 pt-5">
        __________ TRACKS __________
      </h1>
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
            <p className="text-white">{pathDescription[modalContent]}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tracks;
