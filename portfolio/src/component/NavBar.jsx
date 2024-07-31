import React from 'react';
import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/ahmed-adel-elshaer-528978231/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/ahmedadelelshaer" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
