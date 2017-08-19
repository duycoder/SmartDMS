import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src01/app';

export default class RnSmartDMS extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RnSmartDMS', () => RnSmartDMS);
