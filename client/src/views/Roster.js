import { useState, useEffect } from 'react';

const Roster = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        console.log('Useeffect is running!!!');
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
      <h1>Player Roster</h1>
      {players?.map(player => {
        return (
          <div key={player?._id}>
            <h3>{player?.firstName}</h3>
            <h3>{player?.lastName}</h3>
            <h3>{player?.number}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Roster;
