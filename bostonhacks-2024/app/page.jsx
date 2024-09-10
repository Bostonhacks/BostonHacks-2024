import Image from "next/image";
import Hero from "./Hero";
import Link from 'next/link'
import Navbar from "@/components/Navbar";
import Tracks from "@/components/LandingComponents/Tracks";

import Welcome from "@/components/LandingComponents/Welcome";
import Signal from "@/components/LandingComponents/Signal";
import ThemeOfTheYear from "@/components/LandingComponents/ThemeOfTheYear";
import Schedule from "@/components/LandingComponents/Schedule";
import FAQ from "@/components/LandingComponents/FAQ";
import Astronaut from "@/components/LandingComponents/Astronaut";
import Sponsors from "@/components/LandingComponents/Sponsors";


const Home = () => {
  return (
    <main>
      <Welcome />
      <Signal />
      <ThemeOfTheYear />
      <section id="tracks">
        <Tracks/>
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
    
      <Astronaut/>
      <section id="sponsors">
        <Sponsors />
      </section>

      {/* This is how you add components to a page */}
      {/* <Hero /> */}

      {/* You can also pass children elements to components like this: */}
      {/* <Hero>
        <Image src="/bostonhacks-logo.svg" alt="BostonHacks Logo" width={100} height={100} />
      </Hero> */}

      {/* or parameters (or elements as well) like this */}
      {/* <Hero child1={} child2={} child3={} /> */}
      {/* <div id="tracks">
        <Tracks/>
      </div> */}

    </main>
  );
}

export default Home;
