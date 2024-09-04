import React from 'react'

import Welcome from '@/components/SponsorComponents/Welcome.jsx'
import Searching from '@/components/SponsorComponents/Searching.jsx'
import TwilloQuote from '@/components/SponsorComponents/TwilloQuote.jsx'
import WhoWeAre from '@/components/SponsorComponents/WhoWeAre.jsx'
import WhyUs from '@/components/SponsorComponents/WhyUs.jsx'
import Perks from '@/components/SponsorComponents/Perks.jsx'
import Stats from '@/components/SponsorComponents/Stats.jsx'

function Sponsor() {
  return (
    <main>
      <Welcome />
      <Searching />
      <TwilloQuote />
      <WhoWeAre />
      <WhyUs />
      <Perks />
      <Stats />

    </main>
  )
}

export default Sponsor