import React, { useEffect, useState } from 'react';
import PlayersData from '../../Players.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Player from '../Player/Player';
import AddedPlayers from '../AddedPlayers/AddedPlayers';

const Squad = () => {
  const [players, setPlayers] = useState([]);
  const [addedPlayer, setaddedPlayer] = useState([]);

  useEffect(() => {
    setPlayers(PlayersData);
  }, []);

  const handleBtnClick = (player) => {
    const newPlayer = [...addedPlayer, player];
    setaddedPlayer(newPlayer);
  };

  return (
    <div className="Squad container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {players.map((player) => (
              <div className="col-md-6" key={player.id}>
                <Player
                  player={player}
                  handleBtnClick={handleBtnClick}
                ></Player>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <AddedPlayers addedPlayer={addedPlayer}></AddedPlayers>
        </div>
      </div>
    </div>
  );
};

export default Squad;
