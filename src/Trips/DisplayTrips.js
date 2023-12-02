import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Row, Col, Alert } from 'react-bootstrap';
import TripCard from './TripCard';

class DisplayTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      error: ''
    }
  }

  // Fetches all the user's saved trips from the database and stores them in state
  getTrips = async () => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      const trips =  await axios.get(`${process.env.REACT_APP_SERVER}/travel-routes`);
      this.setState({trips: trips.data});
    } catch (err) {
      // this.setState({error: 'Could not load saved trips'});
      console.error(err);
    }
  }

  /**
   * Deletes the trip from the webpage and database
   * @param {Object} trip - Trip to delete
   */
  deleteTrip = async (trip) => {
    try {
      const trips = [...this.state.trips];
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      if (res) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        const requestURL = `${process.env.REACT_APP_SERVER}/travel-routes/${trip._id}`;

        await axios.delete(requestURL);
        trips.splice(trips.indexOf(trip), 1);
        
        this.setState({ trips, error: '' });
        this.handleAlertTimer('Deleted trip successfully');
      }
    } catch (err) {
      this.setState({ successAlert: { show: false, message: '' }, error: 'Could not delete trip' });
      console.error(err);
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

  componentDidMount() {
    this.getTrips();
  }

  render() {
    return (
      <div>
        {this.state.error && <Alert variant='warning'>{this.state.error}</Alert>}
        <Row lg={'auto'} className='justify-content-center'>
          {this.state.trips.length > 0 && this.state.trips.map(trip => (
            <Col key={trip._id}>
              <TripCard trip={trip} deleteTrip={this.deleteTrip}/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default withAuth0(DisplayTrips);
