//? POST REQUEST - FORM TO INPUT NEW PLAYER
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; //! Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js

const NewPlayer = event => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    team: '',
    position: '',
  });

  const history = useHistory(); //! MUST ACTIVATE USE HISTORY HERE TO REDIRECT TO DIFFERENT PAGE AFTER FORM SUBMISSION. WON'T WORK INSIDE THE handleSubmit FUNCTION SO MUST BE HERE

  const handleSubmit = event => {
    try {
      //? POST REQUEST - no need for async with post request
      event.preventDefault();
      fetch('/api/players', {
        method: 'POST',
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
          }, 2000) // Timeout of 2 seconds needed to allow for adequate time for data to be posted and then upon redirect the players.js useEffect hook has enough time to retrieve all the data including the newly posted data. It seemed to be working fine without setTimeout on local host but when deploying there seemed to be a problem so this is to fix that delay in the get request from players.js file getting the data including the newly posted player.
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="newPlayer-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={event =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={event =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />

      <label htmlFor="number">Number</label>
      <input
        type="number"
        name="number"
        value={formData.number}
        onChange={event =>
          setFormData({ ...formData, number: event.target.value })
        }
      />

      <label htmlFor="team">Team</label>
      <input
        type="text"
        name="team"
        value={formData.team}
        onChange={event =>
          setFormData({ ...formData, team: event.target.value })
        }
      />

      <label htmlFor="position">Position</label>
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={event =>
          setFormData({ ...formData, position: event.target.value })
        }
      />

      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default NewPlayer;
