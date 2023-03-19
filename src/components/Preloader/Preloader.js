import React from 'react';
import './Preloader.css';

function Preloader(props) {
  return (
    <div className={`preloader ${props.isOpen ? 'preloader_open' : ''}`}>
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
}

export default Preloader;
