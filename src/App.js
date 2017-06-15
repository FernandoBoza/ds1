import React, { Component } from 'react';

import { header, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

import buttonDown from './img/button.png';

import './App.css';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.hover = this.hover.bind(this);
  }

  hover() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <header>
          <Jumbotron >
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger header.</p>
            <p className="lead">
            <Button outline color="info">Learn More</Button>
            </p>
            {/*<button className={this.state.isToggleOn ? 'circle animated infinite pulse' : 'circle'} onMouseOver={this.hover}><i className="fa fa-caret-down"></i></button>*/}
            <button className='hvr-pulse'><img src={buttonDown} alt="button down"/></button>
          </Jumbotron>
        </header> 
      </div>
    );
  }
}

export default App;
