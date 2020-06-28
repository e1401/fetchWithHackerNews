import React, { Component } from 'react';
import MyLoader from './MyLoader';






export default class SpotifyApi extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          token: '',
          id:  ''
        };
        console.log( {...this.state})
      }


    render() {
        return (
            
                <div>
                    <MyLoader />
                <p>React-spotify-api not good</p>
                </div>
            
            
        )
    }
}