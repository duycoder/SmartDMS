import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { createStore } from 'redux'
import Main from './components/main';
import rootReducers from './reducers/rootReducers'
const initialState = {};
const store = createStore(rootReducers, initialState);


export default class App extends Component {
    render() {
        return (
            <Main />
        );
    }
}