import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <>
          <Navbar></Navbar>  

          <Hero></Hero>
          <AboutUs></AboutUs>
        </>
    );
};

export default Home;