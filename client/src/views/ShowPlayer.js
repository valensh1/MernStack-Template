import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'; //! Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js. In this case we are redirecting back to the /players index route upon deleting a player from this show page

const ShowPlayer = () => {
  const { id } = useParams();
  const history = useHistory(); //! MUST ACTIVATE USE HISTORY HERE TO REDIRECT TO DIFFERENT PAGE AFTER FORM SUBMISSION. WON'T WORK INSIDE THE handleSubmit FUNCTION SO MUST BE HERE

  const [singlePlayer, setSinglePlayer] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/players/${id}`);
        const data = await response.json();
        console.log(data);
        setSinglePlayer(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleClick = event => {
    console.log('You clicked the DELETE button');
    try {
      fetch(`/api/players/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(
        setTimeout(() => {
          history.push(`/players`); //! ENTER ROUTE HERE YOU WANT TO GO TO AFTER FORM SUBMISSION)
        }, 1500)
      ); // Timeout of 2 seconds needed to allow for adequate time for data to be posted and then upon redirect the players.js useEffect hook has enough time to retrieve all the data including the newly posted data. It seemed to be working fine without setTimeout on local host but when deploying there seemed to be a problem so this is to fix that delay in the get request from players.js file getting the data including the newly posted player.)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container__single-player">
      <table className="table__single-player">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Team</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`${singlePlayer?.firstName} ${singlePlayer?.lastName}`}</td>
            <td>{singlePlayer?.number}</td>
            <td>{singlePlayer?.team}</td>
            <td className="player-position">{singlePlayer?.position}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn">
        <Link className="btn-link" to={'/players'}>
          &larr; BACK
        </Link>
      </button>
      <button className=" btn button__delete" onClick={handleClick}>
        DELETE
      </button>
      <button className=" btn ">
        <Link className="btn-link" to={`/players/edit/${singlePlayer?._id}`}>
          EDIT
        </Link>
      </button>
    </div>
  );
};
export default ShowPlayer;
