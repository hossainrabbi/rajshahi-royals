import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
  const {
    img,
    name,
    age,
    playingRole,
    batting,
    bowling,
    salary,
  } = props.player;
  const handleBtnClick = props.handleBtnClick;
  return (
    <div className="Player mb-4 p-3">
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <div className="player-content text-center">
        <h3>{name}</h3>
        <p>
          <small>Age: {age}</small>
        </p>
        <p>
          <small>Playing Role: {playingRole}</small>
        </p>
        <p>
          <small>Batting: {batting}</small>
        </p>
        <p>
          <small>Bowling: {bowling}</small>
        </p>
        <p>
          <small>Salary: {salary}</small>
        </p>
        <button
          className="btn btn-warning mt-3"
          onClick={() => handleBtnClick(props.player)}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Add Player
        </button>
      </div>
    </div>
  );
};

export default Player;
