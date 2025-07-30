import React from 'react';
import { motion } from "framer-motion";

import bgImage from '../assets/hero.jpg'
import Container from '../reusable/Container';

const Hero = () => {
    return (
        <>
        <section
      id="hero"
      className="bg-primary scroll-mt-[100px] py-16"
    >
         <div
  className="hero min-h-[75vh]"
  style={{
    backgroundImage: `url(${bgImage})` ,
    backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
  }}
>
  <div className="hero-overlay"></div>
  <Container>
  <div className="max-w-xl text-white space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            
          >
        Pizza Break
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Life’s too short for bad food. We’re serving up fresh, handcrafted pizzas made with love — because you deserve nothing less than delicious.
          </motion.p>

         
        </div>

  </Container>
  
</div>   
      </section>
        </>
    );
};

export default Hero;