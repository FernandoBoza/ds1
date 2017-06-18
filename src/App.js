import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import { Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

import buttonDown from './img/button.png';
import rayBlueGreen from './img/img1.png';

import './App.css';

class App extends Component {

   constructor(props) {
    super(props);
    
    this.state = {  isOpen: false, 
                    isHovered: false, 
                    isHovered2: false, 
                    loaded : true, 
                  };
    
    this.toggle = this.toggle.bind(this);
    this.popState1 = this.popState1.bind(this);
    this.popState2 = this.popState2.bind(this);
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  popState1 () {
    const {loaded, isHovered} = this.state; 
    // check if the component was loaded
    // which will be only once
    // because the state is set to false
    if (loaded) {
        return this.setState({
          isHovered : !isHovered,
          loaded : false
        });
    }
    this.setState({
      isHovered : !isHovered
    });
  }
//   popState1(){
//     this.setState({
//         isHovered: !this.state.isHovered
//     });
// }
  
  popState2(){
    this.setState({
        isHovered2: !this.state.isHovered2
    });
}

  render() {

    const {loaded, isHovered} = this.state;
    let box;
    let circle;
    // first page reload
    if (loaded) {
      box = 'box open';
      circle = 'circle1 open'
    } else {
      box = isHovered ? 'box open' : 'box';
      circle = isHovered ? 'circle1 open' : 'circle1';
    }

    // const box = this.state.isHovered ? "box open" : "box";
    const box2 = this.state.isHovered2 ? "box2 open" : "box2";
    
    return (
      <div>

      <Navbar inverse toggleable className='pt-3 sticky-top'>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">LOGO HERE</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className='hvr-underline-from-center' href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='hvr-underline-from-center' href="#">Shop</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='hvr-underline-from-center' href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='hvr-underline-from-center' href="#"><i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i> $214.00</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

        <header className='container-fluid'>    
            <a className="spot1" onMouseEnter={this.popState1.bind(this)} onMouseLeave={this.popState1.bind(this)}>
              <div className={circle}>
                <div className="circle2">
                  <div className="circle3">
                  </div>
                </div>
              </div>
            </a>

            <div className={box}>
              <h4 className='item-num'>#1253</h4>
              <h4 className='popUpTitle'>Lunettes De Soleil</h4>
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

            <div className={box2}>
              <h4 className='item-num'>#4087</h4>
              <h4 className='popUpTitle'>Costume Bleu Homme</h4>
              <p className='pl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
            </div>

            <button className='hvr-pulse button-img' onClick={() => scrollToComponent(this.section1, { offset: -30, align: 'top', duration: 1000})}>
              <img src={buttonDown} alt="button down"/>
            </button>
        </header> 

        <section className="container my-10" ref={(section) => { this.section1 = section; }}>
          <Row>
            <Col lg={{ size:5, offset: 1 }}><h1 className='header-2'>Lorem Ipsum Dolor Sit, Amet Consectetur</h1></Col>
            <Col lg={{size: 4 }}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. </p></Col>
          </Row>
        </section>

        <section className="container my-10">
          <Row>
            <Col lg={{ size: '5'}}>
              <h2 className='mt-10 header-2'>Lorem Ipsum Dolor Sit</h2>
              <p className='mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
              <p className='my-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
              <Button outline color='primary' className='round-btn'> Read More </Button>
            </Col>
            <Col lg={{ offset: 1}}><img src={rayBlueGreen} alt=""/></Col>
          </Row>
        </section>

        <section className="container-fluid my-10">
          <Row>
            <Col className="bg-red">
              <img className='hvr-grow-shadow' src="http://via.placeholder.com/250x250" alt=""/>
              <h2 className="header-2 mt-5 mb-3">Summer</h2>
              <p className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt.</p>
            </Col>
            <Col className="bg-blue">
              <h2 className="header-2 mt-5 mb-3">Summer</h2>
              <p className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt.</p>
              <img className='hvr-grow-shadow' src="http://via.placeholder.com/250x250" alt=""/>
            </Col>
            <Col className="bg-purple">
              <img className='hvr-grow-shadow' src="http://via.placeholder.com/250x250" alt=""/>
              <h2 className="header-2 mt-5 mb-3">Summer</h2>
              <p className='text-justify px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt.</p>
            </Col>
          </Row>
        </section>

      </div>
    );
  }
}

export default App;

