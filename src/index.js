import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Explore from "./Explore";
import Profile from "./Profile";
import LoginButton from "./Login";
import Trip from './Trips/Trip';
import About from './About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENTID}
    authorizationParams={{
      redirect_uri: process.env.REACT_APP_AUTH_REDIRECTURI
    }}
  >
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<LoginButton />} />
        <Route path="/trip/:tripID" element={<Trip />} />
      </Routes>
    </Router>
  </Auth0Provider>
  </React.StrictMode>
);

