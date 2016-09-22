import React, { Component } from 'react';
import Header from './header';
import IconBar from './iconBar';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div className="app-wrap">
        <Header />
        {this.props.children}
        <IconBar />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
