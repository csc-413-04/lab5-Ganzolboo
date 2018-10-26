import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    let myVariable = <h2>Brian</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <h1>{this.state.banner}</h1>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          <button onClick={this.buttonHandler} >Click Me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
