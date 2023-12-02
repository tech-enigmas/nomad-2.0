import React from "react";
import { Button, Alert, Fade } from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Airbnb from "./Airbnb/Airbnb";
import Camping from "./Camping/Camping";
import "./explore.css";
import Header from "./Header";
import { Navigate } from "react-router-dom";
import MapComplete from "./Map/MapComplete";

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {
        location: 'new location',
        campsite: {},
        airbnb: null
      },
      origin: '',
      destination: '',
      tripCreated: false,
      error: '',
      successAlert: { show: false, message: '' },
      navigateToProfile: false,
    }
  }
  
  /**
   * Edits the Airbnb selection when the user selects a different Airbnb
   * @param {Object} airbnbToEdit - The airbnb the user selected to edit
   */
  editAirbnb = async (airbnbToEdit) => {
    const editedTrip = { ...this.state.trip };
    editedTrip.airbnb = airbnbToEdit;
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      if (res) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        const requestURL = `${process.env.REACT_APP_SERVER}/travel-routes/${this.state.trip._id}`;
        await axios.patch(requestURL, editedTrip);
        this.setState({ trip: editedTrip });
        this.handleAlertTimer('Selected Airbnb successfully');
      }
    }
    catch (err) {
      this.setState({ successAlert: { show: false, message: '' } });
      console.error(err);
      this.setState({ error: 'Could not edit trip' });
    }
  };

  /**
   * Edits the campsite selection when the user selects a different campsite
   * @param {Object} campsiteToEdit - The campsite the user selected to edit
   */
  editCamping = async (campsiteToEdit) => {
    const editedTrip = { ...this.state.trip };
    editedTrip.campsite = campsiteToEdit;
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      if (res) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        const requestURL = `${process.env.REACT_APP_SERVER}/travel-routes/${this.state.trip._id}`;
        await axios.patch(requestURL, editedTrip);
        this.setState({ trip: editedTrip });
        this.handleAlertTimer('Selected Campsite successfully');
      }
    }
    catch (err) {
      this.setState({ successAlert: { show: false, message: '' } });
      console.error(err);
      this.setState({ error: 'Could not edit trip' });
    }
  };

  /**
   * Adds a new trip to the database that can be edited to store the user's trip info
   */
  createTrip = async () => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      if (res) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
        const requestURL = `${process.env.REACT_APP_SERVER}/travel-routes`;
        let response = await axios.post(requestURL, this.state.trip);
        this.setState({ trip: response.data, tripCreated: true });
      }
    }
    catch (err) {
      this.setState({ successAlert: { show: false, message: '' } });
      console.error(err);
      this.setState({ error: 'Could not create trip' });
    }
  }

  /**
   * Function to handle the timer and hide the alert after a specified duration.
   * handleAlertTimer code by ChatGPT
   * @param {String} message - The Alert message to display to user
   * @returns - Function that clears the timer
   */
  handleAlertTimer = (message) => {
    this.setState({ successAlert: { show: true, message: message } });

    const timer = setTimeout(() => {
      this.setState({ successAlert: { show: false, message: '' } });
    }, 3000); // 3 seconds (shown in miliseconds)

    return () => {
      clearTimeout(timer);
    };
  };

  // Gives an Alert to user that their new trip was made
  saveTrip = () => {
    this.handleAlertTimer('Created trip successfully');
    this.setState({navigateToProfile: true});
  }

  render() {
    return (
      <div className="explore">
        <Header/>
        {!this.state.tripCreated && (
          <div className="d-grid gap-2">
            <Button variant="primary" type="button" size="lg" onClick={this.createTrip}>Create trip!</Button>
          </div>
        )}

        {/* Only shows once trip is created. transition={Fade} is not working for whatever reason */}
        {this.state.successAlert.show && <Alert variant="success" transition={Fade}>{this.state.successAlert.message}</Alert>}
        {this.state.tripCreated && <MapComplete />}
        {this.state.tripCreated && <Camping trip={this.state.trip} editCamping={this.editCamping}/>}
        {this.state.tripCreated && <Airbnb trip={this.state.trip} editAirbnb={this.editAirbnb} />}
        {this.state.tripCreated && (
          <div className="text-center mt-3 mb-3">
            <Button variant="primary" onClick={this.saveTrip} size="lg">Save Trip</Button>
          </div>
        )}
        {this.state.navigateToProfile && <Navigate to='/profile'/>}
      </div>
    )
  }
}

export default withAuth0(Explore);