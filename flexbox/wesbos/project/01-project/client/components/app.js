import React, { Component } from 'react';
import Nav from './nav';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
