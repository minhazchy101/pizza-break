import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurMenu from '../components/OurMenu';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
          <Navbar></Navbar>  

          <Hero></Hero>
          <AboutUs></AboutUs>
          {/* find us */}

          <OurMenu></OurMenu>
          <Footer></Footer>
        </>
    );
};

export default Home;