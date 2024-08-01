import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-cente p-4">
      <Link href="/">
        {/* <Image src="/path/to/logo.png" alt="Logo" width={40} height={40} className="cursor-pointer" /> */}
      </Link>
      <div className="flex space-x-4">
        <Link href="#tracks">
          <p className="text-white border-2 border-white p-2 hover:bg-white hover:text-red-800 transition-colors cursor-pointer">TRACKS</p>
        </Link>
        <Link href="#faq">
          <p className="text-white border-2 border-white p-2 hover:bg-white hover:text-red-800 transition-colors cursor-pointer">FAQ</p>
        </Link>
        <Link href="#schedule">
          <p className="text-white border-2 border-white p-2 hover:bg-white hover:text-red-800 transition-colors cursor-pointer">SCHEDULE</p>
        </Link>
        <Link href="#sponsors">
          <p className="text-white border-2 border-white p-2 hover:bg-white hover:text-red-800 transition-colors cursor-pointer">SPONSORS</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
