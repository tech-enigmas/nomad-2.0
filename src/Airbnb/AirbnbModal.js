import React, { Component } from 'react';
// import Link from 'react-router-dom';
import { Modal, Button, ListGroup } from 'react-bootstrap';

class AirbnbModal extends Component {
  handleClose = () => {
    this.props.closeModal();
  }

  render() {
    const {showModal, airbnb} = this.props;
    return (
      <Modal show={showModal} onHide={this.handleClose} className='airbnb-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{airbnb.name} <span className='modal-title-location'>{airbnb.city}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item><span>Bathrooms: </span>{airbnb.bathrooms}</ListGroup.Item>
            <ListGroup.Item><span>Bedrooms: </span>{airbnb.bedrooms}</ListGroup.Item>
            <ListGroup.Item><span>Beds: </span>{airbnb.bed}</ListGroup.Item>
            <ListGroup.Item><span>Preview amenities: </span>{airbnb.previewAmenities.join(", ")}</ListGroup.Item>
            <ListGroup.Item><span>Rate per night: </span>${airbnb.price.rate} USD</ListGroup.Item>
            <ListGroup.Item><span>Ratings: </span>{airbnb.rating}</ListGroup.Item>
            <ListGroup.Item><span>Total Reviews: </span>{airbnb.reviewsCount}</ListGroup.Item>
            <ListGroup.Item><a href={airbnb.url} className='mt-3 text-center' target='_blank' rel="noreferrer" style={{fontSize: '1.2rem'}}>View on Airbnb.com</a></ListGroup.Item>
          </ListGroup>
          {/* <a href={airbnb.url} className='mt-3 text-center' target='_blank' rel="noreferrer">View on Airbnb.com</a> */}
          {/* <Link to={airbnb.url}><button className='button arrow'>View on Airbnb</button></Link> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AirbnbModal;
