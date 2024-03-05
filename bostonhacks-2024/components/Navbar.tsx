import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex">
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </nav>
  )
}

export default Navbar