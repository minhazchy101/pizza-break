 import React, { useEffect, useState } from 'react';
import logo from '/pizza-logo.svg';
import Container from '../reusable/Container';
import { Link } from 'react-router';
import Card from 'react-ui-cards';


const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch('/menuData.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((jsonData) => {
        setMenuData(jsonData.pizza || []);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  console.log('menuData--> ' , menuData)

  return (
    <div className='bg-primary min-h-screen'>
      <Container>
        {/* Logo */}
        <div className='max-w-lg mx-auto border border-accent flex justify-center'>
          <div className='flex items-center gap-2 text-3xl font-bold text-accent ml-4 py-4 border border-amber-200'>
            <Link to='/' className='flex items-center gap-2'>
              <span>Pizza</span>
              <img src={logo} alt='Pizza Logo' className='h-10 w-10' />
              <span>Break</span>
            </Link>
          </div>
        </div>

        <h1 className='text-2xl text-center text-accent m-4 py-4'>Our Menu</h1>

        {/* Menu Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {menuData?.map((pizza, index) => (
            // <Card
            //   key={index}
            //   float
            //   header={pizza.photo ? pizza.photo : '/assets/default-pizza.jpg'}
            //   avatar="/pizza-logo.svg"
            //   title={pizza.name}
            //   description={`Small: ₹${pizza.prices.small ?? 'N/A'}, Medium: ₹${pizza.prices.medium ?? 'N/A'}, Large: ₹${pizza.prices.large ?? 'N/A'}`}
            // />
            <>
            <p  key={index} className='text-accent'>{pizza.name}</p>
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
