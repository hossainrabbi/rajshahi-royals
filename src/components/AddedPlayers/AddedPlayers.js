import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AddedPlayers = (props) => {
  const addedPlayer = props.addedPlayer;
  const totalSalary = addedPlayer.reduce(
    (acc, salary) => acc + salary.salary,
    0
  );

  return (
    <div>
      <div className="mb-4">
        <h4>Connected Players: {addedPlayer.length}</h4>
        <h4>Total Salary: ${totalSalary}</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Selected Player</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {addedPlayer.map((player, index) => (
            <tr key={index}>
              <th scope="row">{player.name}</th>
              <td>${player.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddedPlayers;
