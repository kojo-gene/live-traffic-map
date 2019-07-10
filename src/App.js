import React, { Component } from 'react';
import './App.css';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
  return (
    <div className="App">
       <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Live Traffic Map</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                1000 Traffic Incidents
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div id='map'></div>
    </div>
  );
};
}

export default App;
