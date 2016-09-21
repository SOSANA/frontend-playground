import React, { Component } from 'react';
import Welcome from './welcome/welcomeMain';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
