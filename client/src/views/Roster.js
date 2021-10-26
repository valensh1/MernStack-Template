import { useState, useEffect } from 'react';

const Roster = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/players');
        const data = await response.json();
        console.log(data);
        await setPlayers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      {players?.map(player => {
        return (
          <div>
            <h1 key={player._id}>{player?.firstName}</h1>
            <h1 key={player._id}>{player?.lastName}</h1>
            <h1 key={player._id}>{player?.number}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Roster;
