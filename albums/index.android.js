//Plcae code in here for Android

//Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/component/header';
// import App from './App';

//Create a Component
const App = () => (
    <Header />
);

//Render it to their device
AppRegistry.registerComponent('albums', () => App);
