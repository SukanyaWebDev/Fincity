import React from 'react';
import Header from '../Header'
import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
  return (
    <div className='main-container'>
      <Header />
      <div className='bottom-Container'>
        <div className='container-1'>
          <h1 className='heading'>Hello ,my name is Madelyn Torff</h1>
          <p>Short text with details about you.what you do or your professional career.you can add more information on the about page.</p>
          <Link to="/projects">
          <button type="button" className='project-btn'>Projects</button>
        </Link>
        <button type="button" className='linkdin-btn'>LinkedIn</button>

        </div>
        <div className='container-2'>
          <img src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1704383253/imageimage1_cpkabc.jpg" alt="image1" className='image' />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
