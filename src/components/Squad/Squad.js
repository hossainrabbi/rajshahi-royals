import React, { useEffect } from 'react';
import PlayersData from '../../Players.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Squad.css';

const Squad = () => {
  useEffect(() => {
    console.log(PlayersData);
  }, []);
  return (
    <div className="Squad container">
      <h2>Squad</h2>
    </div>
  );
};

export default Squad;
