import React from 'react';
import { NavLink } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
import logo from '/pizza-logo.svg';

const Navbar = () => {
  const navItems = [
    { name: 'Home', to: 'hero', type: 'scroll' },
    { name: 'About Us', to: 'about', type: 'scroll' },
    { name: 'Menu', to: '/menu', type: 'route' },
    { name: 'Contact', to: 'contact', type: 'scroll' },
  ];

  const renderNavItem = (item) => {
    const baseClasses =
      'cursor-pointer px-3 py-2 font-medium transition-colors duration-200 text-accent hover:text-secondary';

    if (item.type === 'route') {
      return (
        <li key={item.name}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? 'text-secondary' : ''}`
            }
          >
            {item.name}
          </NavLink>
        </li>
      );
    }

    return (
      <li key={item.name}>
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-secondary"
          className={baseClasses}
        >
          {item.name}
        </ScrollLink>
      </li>
    );
  };

  return (
    <div className='bg-primary shadow-sm max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 fixed top-0 left-0 z-50 w-full'>
    <div className="navbar ">
      <div className="navbar-start">
       

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-accent ml-4">
          <NavLink to="/" className="flex items-center gap-2">
            <span>Pizza</span>
            <img src={logo} alt="Pizza Logo" className="h-10 w-10" />
            <span>Break</span>
          </NavLink>
        </div>
      </div>

    
      <div className="navbar-end ">
        <div className='hidden lg:flex'>

        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems.map(renderNavItem)}
        </ul>
        </div>


 {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-secondary text-accent border-accent btn-outline lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-5 z-[1] w-52 rounded-box bg-primary p-2 shadow right-1"
          >
            {navItems.map(renderNavItem)}
          </ul>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
