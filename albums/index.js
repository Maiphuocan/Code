//Plcae code in here for Android

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';
// import App from './App';

//Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Album" />
    <AlbumList />
  </View>
);

//Render it to their device
AppRegistry.registerComponent('albums', () => App);
