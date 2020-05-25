import React, {Component} from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import TripList from './components/Triplist/triplist';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TripList/>
      </React.Fragment>
    );
  }
}

export default App;
