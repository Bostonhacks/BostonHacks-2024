import React from 'react'

import Navbar from "@/components/Navbar";
import Welcome from "@/components/LandingComponents/Welcome";
import Signal from "@/components/LandingComponents/Signal";
import ThemeOfTheYear from "@/components/LandingComponents/ThemeOfTheYear";

function Landing() {
  return (
    <html lang="en">
      <Welcome />
      <Signal />
      <ThemeOfTheYear />
    </html>
  )
}

export default Landing