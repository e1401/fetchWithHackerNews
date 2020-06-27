import React from 'react';

import './App.css';
// import ApiCall from './Coponents/ApiCall';
import SpotifyApi from './Coponents/SpotifyApi';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">

        <SpotifyApi element="JSON responses"/>
        {/* <ApiCall /> */}
      </div>
    )
  }
}