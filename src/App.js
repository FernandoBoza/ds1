import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import buttonDown from './img/button.png';

import './App.css';

class App extends Component {

   constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false, isHovered: false, isHovered2: false  };
    this.popState1 = this.popState1.bind(this);
    this.popState2 = this.popState2.bind(this);
  }

   toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  popState1(){
    this.setState({
        isHovered: !this.state.isHovered
    });
}
  
  popState2(){
    this.setState({
        isHovered2: !this.state.isHovered2
    });
}

  render() {

    // // // const line = this.state.isHovered ? "line open" : "line";
    const box = this.state.isHovered ? "box open" : "box open";
    
    // // // const line2 = this.state.isHovered2 ? "line2 open" : "line2";
    const box2 = this.state.isHovered2 ? "box2 open" : "box2";
    
    return (
      <div>
        <header className='container-fluid'>
          <Navbar inverse toggleable>
              <NavbarToggler right onClick={this.toggle} />
              {/*<NavbarBrand href="/">LOGO HERE</NavbarBrand>*/}
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Shop</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#"><i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i> $214.00</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

            <a href='https://google.com' target='_blank' rel="noopener noreferrer" className="spot1" onMouseEnter={this.popState1} onMouseLeave={this.popState1}>
              <div className="circle1">
                <div className="circle2">
                  <div className="circle3">
                  </div>
                </div>
              </div>
            </a>

            {/*<div className={line}></div>*/}
            <div className={box}>
              <h4 className='popUpTitle'>Leather Shoes</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
            </div>

            <a className="spot2" onMouseEnter={this.popState2} onMouseLeave={this.popState2}>
              <div className="circle1">
                <div className="circle2">
                  <div className="circle3">
                  </div>
                </div>
              </div>
            </a>

            {/*<div className={line2}></div>*/}
            <div className={box2}>
              <h4 className='popUpTitle'>Black Jeans</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
            </div>

            <button className='hvr-pulse button-img'><img src={buttonDown} alt="button down"/></button>
        </header> 
      </div>
    );
  }
}

export default App;

