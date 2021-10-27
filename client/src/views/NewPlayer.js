//? POST REQUEST - FORM TO INPUT NEW PLAYER
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //! Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js

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
      });
    } catch (error) {
      console.log(error);
    } finally {
      //? Reset the form input fields to blank
      setFormData({
        firstName: '',
        lastName: '',
        number: '',
        team: '',
        position: '',
      });
      //? REDIRECTION TO ROUTE AFTER FORM SUBMISSION
      history.push(`/players`); //! ENTER ROUTE HERE YOU WANT TO GO TO AFTER FORM SUBMISSION
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
