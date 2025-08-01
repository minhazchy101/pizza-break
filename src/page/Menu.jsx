import React, { useEffect, useState } from 'react';
import logo from '/pizza-logo.svg';
import Container from '../reusable/Container';
import { Link } from 'react-router';
import Pizza from '../components/menu/Pizza';
import Pasta from '../components/menu/pasta';
import Add from '../components/menu/Add';

const Menu = () => {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    fetch('/menuData.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((jsonData) => setMenuData(jsonData || {}))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const pizzaMenu = menuData.pizza || [];
  const pastaMenu = menuData.pasta || [];
  const addOnMenu = menuData.add_on || [];

  console.log(pastaMenu)
  // ✅ Reusable item card component
  

  return (
    <div className='bg-primary min-h-screen text-accent py-8'>
      <Container>
        {/* Logo & Heading */}
        <div className='flex flex-col items-center mb-10'>
          <Link to='/' className='flex items-center gap-3 text-4xl font-extrabold text-secondary'>
            <span>Pizza</span>
            <img src={logo} alt='Pizza Logo' className='h-10 w-10' />
            <span>Break</span>
          </Link>
          <p className='text-xl text-accent mt-2'>Crafted with love & flavor</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Pizzas */}
          <div>
            <div className="grid space-y-12 grid-cols-1">
            <h2 className='text-3xl text-center font-semibold mb-8 text-accent tracking-wide'>Our Signature Pizzas</h2>
              <Pizza pizzaMenu={pizzaMenu}></Pizza>

            </div>
             
          </div>


          {/* Pasta + Add Ons */}
          <div className='space-y-12 '>
            {/* Pasta */}
            <div>
              <h2 className='text-3xl text-center font-semibold mb-8 text-accent tracking-wide'>Pasta</h2>
              <div className='grid grid-cols-1 gap-8'>
                
                <Pasta pastaMenu={pastaMenu}></Pasta>
              </div>
            </div>

            {/* Add Ons */}
            <div>
              <h2 className='text-3xl text-center font-semibold mb-8 text-accent tracking-wide'>Add On</h2>
              <div className='grid grid-cols-1 gap-8'>
                
                <Add addOnMenu={addOnMenu}></Add>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
