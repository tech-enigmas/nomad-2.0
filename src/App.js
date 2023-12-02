import React from "react";

// import Airbnb from "./Airbnb/Airbnb";

// import Airbnb from "./Airbnb";
// import Camping from "./Camping";

import Header from "./Header";
import Footer from "./Footer";
import "./App.css";


// import Mapcomplete from "./Map/MapComplete";
// import Marker from "./Map/Marker";
// import AutoComplete from "./Map/AutoComplete";


// import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    return (
      <>
        <div>
          <Header />
        <div className="home">
          <h1>NOMAD</h1>
          <Footer />
        </div>
        </div>
      </>

    )
  }
}

export default (App);
