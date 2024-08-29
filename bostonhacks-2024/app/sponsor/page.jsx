import React from 'react'

import Welcome from '@/components/SponsorComponents/Welcome.jsx'
import Searching from '@/components/SponsorComponents/Searching.jsx'
import TwilloQuote from '@/components/SponsorComponents/TwilloQuote.jsx'
import WhoWeAre from '@/components/SponsorComponents/WhoWeAre.jsx'

function Sponsor() {
  return (
    <main>
      <Welcome />
      <Searching />
      <TwilloQuote />
      <WhoWeAre />

    </main>
  )
}

export default Sponsor