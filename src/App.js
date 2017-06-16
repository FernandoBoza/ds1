import React, { Component } from 'react';

// import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


import buttonDown from './img/button.png';

import './App.css';

class App extends Component {

   constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};
    // this.hover = this.hover.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
    this.handleHover = this.handleHover.bind(this);
  }

  // hover() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

   toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleHover(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render() {
    const btnClass = this.state.isHovered ? "pulse animated" : "";

    return (
      <div>
        <header className='container-fluid'>
          <Navbar inverse toggleable>
              <NavbarToggler right onClick={this.toggle} />
              <NavbarBrand href="/">LOGO HERE</NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#"><i className="fa fa-shopping-cart mx-2" aria-hidden="true"></i> $214.00</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

            <div className="spot1 animated infinite pulse">
              <div className="circle1">
                <div className="circle2">
                  <div className="circle3">
                  </div>
                </div>
              </div>
            </div>

            <div className="spot2 animated infinite pulse">
              <div className="circle1">
                <div className="circle2">
                  <div className="circle3">
                  </div>
                </div>
              </div>
            </div>

            <button className={btnClass} onMouseEnter={this.state.handleHover} onMouseLeave={this.state.handleHover}>Test</button>
            <button className='hvr-pulse button-img'><img src={buttonDown} alt="button down"/></button>
        </header> 

          

      </div>
    );
  }
}

export default App;
