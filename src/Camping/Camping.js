import React from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import Campsites from "./Campsites";




class Camping extends React.Component {
  constructor(props) {
    super(props);
    this.location = React.createRef(null);
    this.state = {
      displayInfo: false,
      campingData: [],
      // query: '',
      error: false,
      campsiteArr: []
    }
  }
  componentDidMount(){
    console.log(this.props.trip);
  };

  // handleInput = (e) => {
  //   e.preventDefault();
  //   this.setState({query: e.target.value}
  //     , () => console.log(this.state.query));
  //   // this.getCampsites()

  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let query = e.target.value;
  //   try {
  //     // let url = `https://ridb.recreation.gov/api/v1/facilities?query=moab&limit=5`
  //     let url = `http://localhost:3001/camping?query=${query}`
  //     const response = await axios.get(url);
  //     query = response.data[0].query;
  //     this.setState({
  //       displayInfo: true,
  //       query: response.data[0].query,
  //       campingData: response.data[0].query,
  //     })
  //   }
  //   catch{this.setState({error:true})};
  //   this.getCampsites(query);
  // }

  resetError = () => {
    this.setState({
      error: false,
      displayInfo: false
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({query:this.location.current.value}, () => console.log(this.state.query));
    let requestURL = `${process.env.REACT_APP_SERVER}/camping?query=${this.location.current.value}`;
    // console.log(requestURL);
    axios.get(requestURL)
      .then(response => {
        this.setState({ campingData: response.data });
        this.setState({ error: '' });
      })
      .catch(err => {
        this.setState({ error: 'could not find campsites :(' });
        console.log(err);
      });
  }


  render() {
    return (
      <>
        <div className="camping">
        <Card className="camping-form">
        <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Find Nearby Camping</Form.Label>
                  <Form.Control type="text" placeholder="Where are you going?" ref={this.location} required />
                  <Button type="submit" onClick={this.resetError}>Find Camping</Button>
                </Form.Group>
              </Form>
         </Card.Body>
        </Card>
        </div>
  
        {this.state.campingData.length > 0 &&
        <Campsites
        campingData={this.state.campingData} editCamping={this.props.editCamping}/>}
        
        
      </>
    )
  }
}


export default Camping;

// {(e)=> this.setState({query:e.target.value})}