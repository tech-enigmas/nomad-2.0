import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button } from 'react-bootstrap';
import './Trip.css';

class TripCard extends Component {

  /**
   * Displays either the campsite image or the airbnb image or the default trip image
   * on the trip card.
   * @param {Object} trip - the current trip
   * @returns {String} - image link
   */
  displayImg = (trip) => {
    if (trip.campsite && trip.campsite.image[0]) return trip.campsite.image[0].URL
    else if (trip.airbnb && trip.airbnb.images[0]) return trip.airbnb.images[0]
    return 'https://cdn.pixabay.com/photo/2017/04/05/01/13/trip-2203682_1280.jpg'
  }

  /**
   * Formats the date that the trip was created into something more readable
   * formatDate code from: https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
   * @param {Date} date - the date from the database that the trip was created
   * @returns {Date} - the formatted date
   */
  formatDate = (date) => { 
    let timeElapsed = new Date(date);
    let formattedDate = timeElapsed.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" });
    return formattedDate; 
  }

  render() {
    console.log(this.props.trip)
    const { trip, deleteTrip } = this.props;
    return (
      <Card className="trip-card" style={{ width: '18rem', height: '55rem' }}>
        <Card.Img variant="top" src={this.displayImg(trip)} alt='trip image' />
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <span>Location:</span>
              <p>{trip.location}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Campsite:</span>
              <p>{trip.campsite ? trip.campsite.site : 'None chosen'}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Airbnb:</span>
              <p>{trip.airbnb ? <a href={trip.airbnb.url} target='_blank' rel="noreferrer">{trip.airbnb.name}</a> : 'None chosen'}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className='mt-3'><span>Created: </span>{this.formatDate(trip.dateCreated)}</p>
            </ListGroup.Item>
          </ListGroup>
          <div className="buttons mt-3">
            <Link to={`/trip/${trip._id}`}>
              <Button variant="primary">Edit trip</Button>
            </Link>{" "}
            <Button variant='danger' onClick={() => deleteTrip(trip)}>Delete trip</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default TripCard;
