import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/us.jpg';
import Container from '../reusable/Container';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-primary scroll-mt-[100px] py-10 min-h-[80vh]"
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-accent mb-4">
              About <span className="text-secondary">Pizza Break</span>
            </h2>

            <p className="text-accent text-lg mb-4">
              At <span className="text-secondary font-semibold">Pizza Break</span>, we believe pizza is more than just food — 
              it's a <span className="text-secondary font-medium">delicious experience</span>. Every slice is baked with love, 
              using fresh ingredients and traditional methods.
            </p>

            <p className="text-accent text-lg mb-6">
              Whether you're craving a classic or something bold and new, 
              <span className="text-secondary font-semibold"> our chefs craft every pizza with care</span>. 
              Come for the food, stay for the flavor.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 overflow-hidden rounded-xl min-h-screen border border-amber-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={aboutImage}
              alt="About Pizza Break"
              className="rounded-xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
