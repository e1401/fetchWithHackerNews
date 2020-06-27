import React from 'react';

import './App.css';
import ApiCall from './Coponents/ApiCall';

export default class App extends React.Component {
  render(){
    return (
      <div class="App">
        <ApiCall />
      </div>
    )
  }
}