import Image from "next/image";
import Hero from "./Hero";
import Link from 'next/link'
import Navbar from "@/components/Navbar";

import Welcome from "@/components/LandingComponents/Welcome";
import Signal from "@/components/LandingComponents/Signal";
import ThemeOfTheYear from "@/components/LandingComponents/ThemeOfTheYear";


const Home = () => {
  return (
    <main>
      <Welcome />
      <Signal />
      <ThemeOfTheYear />
      {/* This is how you add components to a page */}
      {/* <Hero /> */}

      {/* You can also pass children elements to components like this: */}
      {/* <Hero>
        <Image src="/bostonhacks-logo.svg" alt="BostonHacks Logo" width={100} height={100} />
      </Hero> */}

      {/* or parameters (or elements as well) like this */}
      {/* <Hero child1={} child2={} child3={} /> */}
    </main>
  );
}

export default Home;
