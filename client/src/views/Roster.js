import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Roster = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
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
    <div>
      <h1>Roster of Players</h1>
      {players?.map(player => {
        return (
          <div key={player?._id}>
            <h3>{`${player?.firstName} ${player?.lastName}`}</h3>
            <h3>{player?.number}</h3>
            <h4>{player?.team}</h4>
            <h5>{player?.position}</h5>
          </div>
        );
      })}
      <button>
        <Link to="/players/new">NEW PLAYER</Link>
      </button>
    </div>
  );
};

export default Roster;
