import React from 'react'
import planet1 from '../public/images/tracks/planet1.svg'
import planet2 from '../public/images/tracks/planet2.svg'
import planet3 from '../public/images/tracks/planet3.svg'
import Image from 'next/image'

function Tracks() {
  return (
    <div>
        <h1>Tracks</h1>
        <Image src={planet1} alt="planet1"/>
        <Image src={planet2} alt="planet2"/>
        <Image src={planet3} alt="planet3" />
    </div>
  )
}

export default Tracks