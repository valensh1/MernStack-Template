import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Roster = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //? GET REQUEST - INDEX ROUTE SHOWING ALL PLAYERS
        const response = await fetch('/api/players');
        const data = await response.json();
        await setPlayers(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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

export default Roster;
