import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container, Card } from "react-bootstrap";
import DisplayTrips from "./Trips/DisplayTrips";
import Header from "./Header";
import './Profile.css';

class Profile extends React.Component {
  render() {
    const { isAuthenticated, user } = this.props.auth0;
    return (
      <div className="profile">
        <Header />
        {isAuthenticated && (
          <Container>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.picture} alt={user.name} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  {user.email}
                </Card.Text>
              </Card.Body>
            </Card>
            <h2 className="text-center">Saved Trips</h2>
            <DisplayTrips />
          </Container>
        )}
      </div>
    )
  }
}

export default withAuth0(Profile);