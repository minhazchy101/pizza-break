import React from 'react';
import Container from '../reusable/Container';
import { motion } from 'framer-motion';
import pizza from '../assets/pizza.jpg'
import { Link } from 'react-router';

const OurMenu = () => {
    return (
        <section
      id="ourMenu"
      className="bg-primary scroll-mt-[100px] py-10 min-h-[75vh]"
    >

        <Container>

           
                {/* text section */}
                <div className='text-center text-accent max-w-5xl mx-auto space-y-4'>
                  <motion.h1
                             className="text-4xl md:text-6xl font-extrabold leading-tight"
                              initial={{ opacity: 0, y: -80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }} // optional config
                           >
                         Our Menu
                           </motion.h1>
                 
                           <motion.p
                             className="text-sm md:text-xl"
                               initial={{ opacity: 0, y: -45 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: true, amount: 0.5 }}
                           >
                            At the heart of our kitchen is a love for bold flavors and fresh ingredients. From classic Margheritas to loaded meat feasts, each pizza is handcrafted to perfection. We also offer a variety of pastas, salads, and sides to complete your meal. Whether you're dining in or taking out, there's something delicious waiting for everyone.
                           </motion.p>  
                </div>

               {/* image section */}
     <div className="mt-12 flex justify-around flex-col-reverse md:flex-row gap-6">
  <motion.div
      
      className="overflow-hidden rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2  }}
      viewport={{ once: true }}
    >
      <img
        src={pizza}
        alt={`Pizza `}
        className="w-[576px] h-[356px] object-cover hover:scale-105 transition-transform duration-500"
      />
    </motion.div>
    
  <motion.div
      
      className="overflow-hidden rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2  }}
      viewport={{ once: true }}
    >
      <img
        src={pizza}
        alt={`Pizza `}
        className="w-[576px] h-[356px] object-cover hover:scale-105 transition-transform duration-500"
      />
    </motion.div>
           </div>

            <div className='text-center mt-8'>
                <Link to='/menu' className='btn btn-secondary text-accent btn-outline py-4 px-8'>Menu</Link>
            </div>
        </Container>


    </section>
    );
};

export default OurMenu;