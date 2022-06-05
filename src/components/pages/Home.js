import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Menu from '../Menu'
import Location from '../Location'
import Follow from '../Follow'
import About from '../About'
import Gallery from '../Gallery'

function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Menu/>
      <Gallery/>
      <Follow/>
      <Location/>
      <Footer />
    </>
  );
}

export default Home;
