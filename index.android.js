//index.android.js - place android code here

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
        <Header />
    );

//Render it to the device
AppRegistry.registerComponent('albumsApp', () => App);