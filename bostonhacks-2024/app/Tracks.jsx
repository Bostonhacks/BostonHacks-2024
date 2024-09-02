import React from "react";
import planet1 from "../public/images/tracks/planet1.svg";
import planet2 from "../public/images/tracks/planet2.svg";
import planet3 from "../public/images/tracks/planet3.svg";
import Image from "next/image";

function Tracks() {
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

  return (
    <div>
      <h1 className="text-center text-4xl mb-52 pt-5">
        __________ TRACKS __________
      </h1>
      <div className="flex flex-col">
        <div className="w-1/3 flex flex-col items-center self-end mr-20">
          <h1 style={planetsTextBoxStyle} className={planetsTextBoxCSS}>
            Reimagine Reality
          </h1>
          <Image src={planet1} alt="planet1" />
        </div>
        <div className="w-1/3 items-center flex flex-col ml-32">
          <h1 style={planetsTextBoxStyle} className={planetsTextBoxCSS}>
            Cometcare
          </h1>
          <Image src={planet2} alt="planet2" />
        </div>
        <div className="w-1/3 flex flex-col items-center self-end mr-60">
          <h1 style={planetsTextBoxStyle} className={planetsTextBoxCSS}>
            Interstellar Intelligence
          </h1>
          <Image src={planet3} alt="planet3" />
        </div>
      </div>
    </div>
  );
}

export default Tracks;

{
  /* <div
style={{
  "--background": "1 1 1",
  "--highlight": "200 255 255",
  "--bg-color":
    "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
  "--border-color": `linear-gradient(145deg,
    rgb(var(--highlight)) 0%,
    rgb(var(--highlight) / 0.3) 33.33%,
    rgb(var(--highlight) / 0.14) 66.67%,
    rgb(var(--highlight) / 0.1) 100%)
  `,
}}
className="flex aspect-[2/1] w-1/3 flex-col items-center justify-center rounded-xl border border-transparent text-center
[background:padding-box_var(--bg-color),border-box_var(--border-color)]"
>
<p className="font-medium text-white">Testing gradient</p>
</div> */
}
