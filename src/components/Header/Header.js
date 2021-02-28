import React from 'react';
import logo from '../../Rajshahi_Royals.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="logo text-center py-2">
        <img src={logo} alt="logo" />
      </div>
      <div className="container-fluid bg-warning py-2">
        <h2 className="text-center">Rajshahi Royals Squad / Players</h2>
      </div>
    </div>
  );
};

export default Header;
