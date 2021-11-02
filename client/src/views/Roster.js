//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Roster = () => {
  //! Need to modify Roster based upon what you rename the Roster.js file name.
  const [players, setPlayers] = useState([]); //! Change players and setPlayers to names that relate to your application

  useEffect(() => {
    (async () => {
      try {
        //? GET REQUEST - INDEX ROUTE SHOWING ALL PLAYERS
        const response = await fetch('/api/players'); //! Change players to accommodate your application. Leave api the same
        const data = await response.json();
        await setPlayers(data); //! Change setPlayers to whatever name you use above in useState
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  //! Change where it says players to accommodate your application and change the fields shown in index page to show whatever fields you want to show from your MongoDB database.
  return (
    <div className="index-container">
      <h1>Roster of Players</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Team</th>
            <th>Position</th>
          </tr>
        </thead>
        {players?.map(player => {
          return (
            <tbody key={player?._id}>
              <tr className="index-container__player">
                <td>
                  <Link
                    className="index-container__player-link"
                    to={`/players/${player?._id}`}
                  >
                    {`${player?.firstName} ${player?.lastName}`}
                  </Link>
                </td>
                <td>{player?.number}</td>
                <td>{player?.team}</td>
                <td>{player?.position}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <button className="btn btn-index">
        <Link className="btn-link" to="/players/new">
          NEW PLAYER
        </Link>
      </button>
    </div>
  );
};

export default Roster; //! Need to modify Roster based upon what you rename the Roster.js file name.
