import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '/pizza-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 border-2 border-t-secondary">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-accent">
          <span>Pizza</span>
          <img src={logo} alt="Pizza Logo" className="h-10 w-10" />
          <span>Break</span>
        </Link>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-600 opacity-40"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Pizza Break. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
