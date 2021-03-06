import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// React-Strap Components
import { Row, Col, Button } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

// Img Imports
import buttonDown from './img/button.png';
import rayBlueGreen from './img/img1.png';

// CSS/JS Libraries
import WOW from 'wowjs';
import 'animate.css/animate.css';
import './App.css';

class App extends Component {

   constructor(props) {
    super(props);
    
    this.state = {  isOpen: false, 
                    isHovered: false, 
                    isHovered2: false, 
                    loaded : true,
                    isTop: true,
                    submitBar: false,
                  };
    
    this.toggle = this.toggle.bind(this);
    this.popState1 = this.popState1.bind(this);
    this.popState2 = this.popState2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 550 })
    });
      new WOW.WOW().init();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  popState1 () {
    const {loaded, isHovered} = this.state; 

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
  
  popState2(){
    this.setState({
        isHovered2: !this.state.isHovered2
    });
}
  
  handleSubmit(){
    this.setState({
        submitBar: !this.state.submitBar
    });
}

  render() {

    const submitBarClass = this.state.submitBar ? 'input-group-btn x' : 'input-group-btn';
    const afterSubmit = this.state.submitBar ? 'afterSubmitClick' : '';
    const confirmMessage = this.state.submitBar ? 'Thank You' : 'Submit';

    const box2 = this.state.isHovered2 ? "box2 open" : "box2";
    const {loaded, isHovered} = this.state;
    let box;
    let circle;

    if (loaded) {
      box = 'box open';
      circle = 'circle1 open'
    } else {
      box = isHovered ? 'box open' : 'box';
      circle = isHovered ? 'circle1 open' : 'circle1';
    }
    
    return (
      <div>
      <Navbar inverse toggleable style={{ top: 0 }} className={this.state.isTop ? 'pt-3 sticky-top nav-bg' : 'pt-3 sticky-top nav-bg scrolling'}>
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

        <header className='container-fluid wow fadeInLeft' data-wow-duration="1000ms" data-wow-delay="300ms">   
            <a className="spot1" onMouseEnter={this.popState1} onMouseLeave={this.popState1}>
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
              <p className='hidden-sm-down'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
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
              <p className='hidden-sm-down'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
            </div>

            <button className='hvr-pulse button-img' onClick={() => scrollToComponent(this.section1, { offset: -60, align: 'top', duration: 1000})}>
              <img src={buttonDown} alt="button down"/>
            </button>
        </header> 

        <section className="container my-10 wow fadeIn" data-wow-duration="1000ms" data-wow-delay="1000ms" ref={(section) => { this.section1 = section; }}>
          <Row>
            <Col lg={{ size:5, offset: 1 }}><h1 className='header-2'>Lorem Ipsum Dolor Sit, Amet Consectetur</h1></Col>
            <Col lg={{size: 4 }}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. </p></Col>
          </Row>
        </section>

        <section className="container my-10">
          <Row>
            <Col lg={{ size: '4', offset: 1}} className="wow bounceInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
              <h1 className='mt-5 header-2'>Lorem Ipsum Dolor Sit</h1>
              <p className='mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
              <p className='my-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt. Duis velit odio, imperdiet mattis neque id, vestibulum viverra tellus.</p>
              <Button outline color='primary' className='round-btn'> Read More </Button>
            </Col>
            <Col lg={{ offset: 1}} className="wow bounceInRight hidden-md-down" data-wow-duration="1000ms" data-wow-delay="300ms">
              <img src={rayBlueGreen} alt=""/>
            </Col>
          </Row>
        </section>

        <section className="container-fluid my-10">
          <Row>
            <Col md={{size: 4}} sm={{ size: 12 }} className="bg-red wow bounceInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
              <img className='hvr-grow-shadow' src="http://via.placeholder.com/250x250" alt=""/>
              <h2 className="header-2 mt-5 mb-3">Item #1</h2>
              <p className='text-justify p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt.</p>
            </Col>
            <Col md={{size: 4}} sm={{ size: 12 }} className="bg-blue wow bounceInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
              <h2 className="header-2 mt-0 mb-3">Item #2</h2>
              <p className='text-justify p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt.</p>
              <img className='hvr-grow-shadow' src="http://via.placeholder.com/250x250" alt=""/>
            </Col>
            <Col md={{size: 4}} sm={{ size: 12 }} className="bg-purple wow bounceInUp" data-wow-duration="1000ms" data-wow-delay="700ms">
              <img className='hvr-grow-shadow' src="http://via.placeholder.com/250x250" alt=""/>
              <h2 className="header-2 mt-5 mb-3">Item #3</h2>
              <p className='text-justify p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit non ullamcorper tincidunt.</p>
            </Col>
          </Row>
        </section>

        <section className="container my-10">
          <Row>
            <Col lg={{ size: 4, offset: 1}} className='bg-purple rounded'></Col>
            <Col lg={{ size: 5, offset: 1}}>
              <img className='img-fluid rounded' src="http://via.placeholder.com/570x350" alt=""/>
              <h1 className='header-2 mt-6'>Lorem Ipsum Dolor</h1>
              <p className='my-4'>Praesent vel elementum dui. Nulla id tellus quis risus vehicula iaculis. Pellentesque faucibus nisl justo, varius ornare augue bibendum pretium.</p>
              <Button outline color='primary round-btn'>Lorem Ipsum Dolor</Button>
            </Col>
          </Row>
        </section>

        <footer className='container-fluid bg-faded'>
          <Col lg={{ size: 8, offset: 2 }} className='my-10 py-5 bg-faded'>
            <h1 className='header-2'>Join The Lorem Ipsum Club</h1>
            <p className='text-center'>Subscribe and save 50% on your first purchase </p>
            <InputGroup>
              <Input placeholder="What's Your Email?" className={afterSubmit} required/>
              <div className={submitBarClass}>
                <Button color="danger" onClick={this.handleSubmit}>{confirmMessage}</Button>
              </div>
            </InputGroup>
          </Col>

          <p className='footer'>Made with <span className="heartbeat" role="img" aria-label="heart">❤️</span> by <a href="http://fernandoboza.com" target='_blank' rel="noopener noreferrer">Fernando B</a></p>
        </footer>

      </div>
    );
  }
}

export default App;

