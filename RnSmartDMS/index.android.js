import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src02/app';
export default class RnSmartDMS extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RnSmartDMS', () => RnSmartDMS);
