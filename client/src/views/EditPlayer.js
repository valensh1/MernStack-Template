import { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'; //! Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js. In this case we are redirecting back to the /players index route upon deleting a player from this show page

const EditPlayer = () => {
  const { id } = useParams();
  console.log(useParams);
  const history = useHistory(); //! MUST ACTIVATE USE HISTORY HERE TO REDIRECT TO DIFFERENT PAGE AFTER FORM SUBMISSION. WON'T WORK INSIDE THE handleSubmit FUNCTION SO MUST BE HERE

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/players/${id}`);
        const data = await response.json();
        console.log(data);
        setFormData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = event => {
    try {
      //? PUT REQUEST - no need for async with put request
      event.preventDefault();
      fetch(`/api/players/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        //? RESETTING OF FORM INPUT FIELDS TO BLANK AFTER FORM SUBMISSION
        .then(
          setFormData({
            firstName: '',
            lastName: '',
            number: '',
            team: '',
            position: '',
          })
        )
        //? REDIRECTION TO ROUTE AFTER FORM SUBMISSION
        .then(
          setTimeout(() => {
            history.push(`/players`); //! ENTER ROUTE HERE YOU WANT TO GO TO AFTER FORM SUBMISSION)
          }, 1500) // Timeout of 1.5 seconds needed to allow for adequate time for data to be posted and then upon redirect the players.js useEffect hook has enough time to retrieve all the data including the newly posted data. It seemed to be working fine without setTimeout on local host but when deploying there seemed to be a problem so this is to fix that delay in the get request from players.js file getting the data including the newly posted player.
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="player-container">
      <h1>EDIT PLAYER</h1>
      <form className="player__form" onSubmit={handleSubmit}>
        <div className="player__form-name">
          <div className="player__form-labelContainer">
            <label className="player-form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={event =>
                setFormData({ ...formData, firstName: event.target.value })
              }
            />
          </div>
          <div className="player__form-labelContainer">
            <label className="player-form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={event =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            />
          </div>
        </div>
        <div className="player__form-labelContainer-number">
          <label className="player-form-label" htmlFor="number">
            Number
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={event =>
              setFormData({ ...formData, number: event.target.value })
            }
          />
        </div>
        <div className="player__form-team-position">
          <div className="player__form-labelContainer">
            <div>
              <label className="player-form-label" htmlFor="team">
                Team
              </label>
              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={event =>
                  setFormData({ ...formData, team: event.target.value })
                }
              />
            </div>
            <div>
              <label className="player-form-label" htmlFor="position">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <input className="btn btn-submit" type="submit" value="SUBMIT" />
      </form>
      <button className="btn btn-cancel">
        <Link className="btn-link" to={'/players'}>
          CANCEL
        </Link>
      </button>
    </div>
  );
};
export default EditPlayer;
