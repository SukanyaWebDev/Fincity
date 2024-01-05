import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='name-heading'>Madelyn Torff</h1>
      <div>
      <ul className='list-items'>
        <Link to="/about" className='link-item'>About</Link>
        <Link to="/projects" className='link-item'>Projects</Link>
        <Link to="/contact" className='link-item'>Contact</Link>
        </ul>
        </div>
      </div>
  
  );
}

export default Header;
