// Index.ios.js - Place code in here for ios

// Import a libaray to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


// Create a component
const App = () => (
    <Header headerText={'Albulms'} />
);


// Render it to the device
AppRegistry.registerComponent('albulms', () => App);
