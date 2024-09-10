import React from 'react'

import Welcome from '@/components/SponsorComponents/Welcome.jsx'
import Searching from '@/components/SponsorComponents/Searching.jsx'
import TwilloQuote from '@/components/SponsorComponents/TwilloQuote.jsx'
import WhoWeAre from '@/components/SponsorComponents/WhoWeAre.jsx'
import WhyUs from '@/components/SponsorComponents/WhyUs.jsx'
import Perks from '@/components/SponsorComponents/Perks.jsx'
import Stats from '@/components/SponsorComponents/Stats.jsx'
import Reviews from '@/components/SponsorComponents/Reviews.jsx'
import SponsorNav from '@/components/SponsorNav.jsx'

function Sponsor() {
  return (
    <main>
      <SponsorNav />
      <Welcome />
      <Searching />
      <TwilloQuote />
      <section id="who-we-are">
        <WhoWeAre />
      </section>
      
      <WhyUs />
      <section id="sponsor">
        <Perks />
      </section>
      
      <section id="stats">
        <Stats />
      </section>
      
      <section id="reviews">
        <Reviews />
      </section>
      

    </main>
  )
}

export default Sponsor