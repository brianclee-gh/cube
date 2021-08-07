import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="https://i.ibb.co/ZGFVPRN/CUBElogo.png" alt="logo" className="cubeLogo" />
      <div className="search-bar">
        <form onSubmit={() => {}} aria-label="search form">
          <input className="search-input" type="text" placeholder="" aria-label="search text" />
          <button className="search-input-btn" type="submit" aria-label="search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;