import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import Services from '../../components/Home/Services'
import AboutUs from '../../components/Home/AboutUs'
import Rooms from '../../components/Home/Rooms'
import FAQ from '../../components/Home/FAQ'
import Gallery from '../../components/Home/Gallery'
import Contact from '../../components/Home/Contact'
import Footer from '../../components/utils/Footer'
import '../../scss/layout/grid.scss';
function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Rooms />
      <Gallery />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}

export default HomePage