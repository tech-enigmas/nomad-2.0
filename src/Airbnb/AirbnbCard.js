import React, { Component } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import AirbnbModal from './AirbnbModal';

class AirbnbCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { airbnb, editAirbnb } = this.props;
    return (
      <div className='airbnb-card'>
        <Card style={{ width: '20rem' }}>
          <Carousel>
            {airbnb.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Card.Img variant="top" src={image} alt={`image ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>{airbnb.name}</Card.Title>
            <Card.Text><span>Address: </span>{airbnb.address}</Card.Text>
            
            <button className="button arrow mb-3" onClick={() => this.setState({ showModal: true })}>Show details</button><br/>
            <Button variant="primary" onClick={() => editAirbnb(airbnb)}>Select</Button>
            
          </Card.Body>
        </Card>
        <AirbnbModal airbnb={airbnb} showModal={this.state.showModal} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default AirbnbCard;
