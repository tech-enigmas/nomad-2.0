import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map.js";




class Main extends React.Component{

  render() {
    return(
      <>
      <Header />
      <Map />
      <Footer />
      </>
    )
  }
}


export default Main;