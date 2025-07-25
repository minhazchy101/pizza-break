import React from 'react';
import { NavLink } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
import logo from '/pizza-logo.svg';

const Navbar = () => {
  const navItems = [
    { name: 'Home', to: '/', type: 'route' },
    { name: 'About Us', to: 'about', type: 'scroll' },
    { name: 'Menu', to: 'menu', type: 'scroll' },
    { name: 'Contact', to: 'contact', type: 'scroll' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-primary z-50 shadow-md">
      <div className="navbar max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-4">
        
        {/* Logo */}
        <div className="flex-1 items-center gap-2">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-accent"
          >
            <span>Pizza</span>
            <img src={logo} alt="Pizza Logo" className="w-10 h-10" />
            <span>Break</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-none ">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navItems.map((item) => (
              <li key={item.to}>
                {item.type === 'scroll' ? (
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-accent hover:text-secondary transition-colors"
                    activeClass="text-secondary"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <NavLink
                    to={item.to}
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown */}
       <div className="dropdown dropdown-end md:hidden">
  <div tabIndex={0} role="button" className="btn btn-outline text-accent btn-secondary ">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </div>
  <ul
    tabIndex={0}
    className="menu dropdown-content mt-5 z-[1] p-2 shadow bg-primary rounded-box w-52 "
  >
    {navItems.map((item) => (
      <li key={item.to}>
        {item.type === 'scroll' ? (
          <ScrollLink
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-accent hover:text-secondary transition-colors"
            activeClass="text-secondary"
          >
            {item.name}
          </ScrollLink>
        ) : (
          <NavLink
            to={item.to}
            className="text-accent hover:text-secondary transition-colors"
          >
            {item.name}
          </NavLink>
        )}
      </li>
    ))}
  </ul>
</div>

      </div>
    </header>
  );
};

export default Navbar;
