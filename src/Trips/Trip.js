import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Accordion, Alert, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Camping from '../Camping/Camping';
import Airbnb from '../Airbnb/Airbnb';
import './Trip.css';

const Trip = (props) => {
  const { tripID } = useParams();
  const [trip, setTrip] = useState({});
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState({show: false, message: ''});

  /**
   * Edits the Airbnb selection when the user selects a different Airbnb
   * @param {Object} airbnbToEdit - The airbnb the user selected to edit
   */
  const editAirbnb = async (airbnbToEdit) => {
    const editedTrip = { ...trip };
    editedTrip.airbnb = airbnbToEdit;
    try {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      if (res) {
        setError('');
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
        const requestURL = `${process.env.REACT_APP_SERVER}/travel-routes/${tripID}`;
        await axios.patch(requestURL, editedTrip);
        setTrip(editedTrip);
        handleAlertTimer('Selected Airbnb successfully');
      }
    }
    catch (err) {
      setShowAlert({show: false, message: ''});
      console.error(err);
      setError('Could not edit trip');
    }
  };

  /**
   * Edits the campsite selection when the user selects a different campsite
   * @param {Object} campsiteToEdit - The campsite the user selected to edit
   */
  const editCamping = async (campsiteToEdit) => {
    const editedTrip = { ...trip };
    editedTrip.campsite = campsiteToEdit;
    try {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      if (res) {
        setError('');
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        const requestURL = `${process.env.REACT_APP_SERVER}/travel-routes/${tripID}`;
        await axios.patch(requestURL, editedTrip);
        setTrip(editedTrip);
        handleAlertTimer('Selected Campsite successfully');
      }
    }
    catch (err) {
      setShowAlert({show: false, message: ''});
      console.error(err);
      setError('Could not edit trip');
    }
  };

  /**
   * Function to handle the timer and hide the alert after a specified duration.
   * handleAlertTimer code by ChatGPT
   * @param {String} message - The Alert message to display to user
   * @returns - Function that clears the timer
   */
  const handleAlertTimer = (message) => {
    setShowAlert({ show: true, message: message});

    const timer = setTimeout(() => {
      setShowAlert({ show: false, message: '' });
    }, 3000); // 3 seconds (in miliseconds)

    return () => {
      clearTimeout(timer);
    };
  };


  // Basically the same as the componentDidMount(). Function only runs things once at the beginning.
  useEffect(() => {
    // Gets the trip from the database using the tripID param
    const getTrip = async () => {
      let requestURL = `${process.env.REACT_APP_SERVER}/travel-routes/${tripID}`;
      const res = await props.auth0.getIdTokenClaims();
      if (res) {
        const jwt = res.__raw;
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
        axios.get(requestURL)
          .then(response => {
            setError('');
            setTrip(response.data);
          })
          .catch(err => {
            console.error(err);
            setError('Could not fetch trip');
          });
      }
    }
    getTrip();
  }, [tripID, props.auth0]);

  return (
    <div className='trip'>
      {error && <Alert variant='warning' onClose={() => setError('')} dismissible>{error}</Alert>}
      {showAlert.show && <Alert variant='success'>{showAlert.message}</Alert>}
      {trip !== {} && (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Location</Accordion.Header>
            <Accordion.Body>
              Location stuff
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Campsite</Accordion.Header>
            <Accordion.Body>
              <Camping trip={trip} editCamping={editCamping}/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Airbnb</Accordion.Header>
            <Accordion.Body>
              <Airbnb trip={trip} editAirbnb={editAirbnb} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
      <div className="button-container mt-3 text-center">
        <Link to="/profile">
          <Button variant='primary'>Save Changes</Button>
        </Link>
      </div>
    </div>
  );
}

export default withAuth0(Trip);

