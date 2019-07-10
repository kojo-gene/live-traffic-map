import React, { Component } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import { Container } from 'reactstrap';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

require('dotenv').config()



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicationName: 'TrafficMaps'
    }
  }

  render() {
  return (
    <div className="App">
      <Header appName={this.state.applicationName} />

      <Container>
        <Map />
      </Container>
    </div>
  );
};
}

export default App;
