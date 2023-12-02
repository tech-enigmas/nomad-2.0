import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";


class Home extends React.Component{
  render(){
    return(
      <div className="home">
        <Header/>
        <Footer />
      </div>
    )
  }
}

export default withAuth0(Home);