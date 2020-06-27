import React from 'react';
import MyLoader from './MyLoader';



const API = 'https://hn.algolia.com/api/v1/search?query=';
    const DEFAULT_QUERY = 'hacker';


export default class ApiCall extends React.Component {
    
    constructor(props) {
        super(props);
     
        this.state = {
          hits: [],
          isLoading: false,
          error: null,
        };
        console.log(this.state)
      }
      
    

      componentDidMount() {

        this.setState({ isLoading: true })
        fetch(API + DEFAULT_QUERY)
        .then (response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error ('Error has happened')
            }
        })
        //   .then(response => response.json()) initial code
          .then(data => this.setState({ hits: data.hits, isLoading: false }))
          .catch(error => this.setState( {error, isLoading: false} ));
          
      };
 
       render() {
        const { hits, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>
        }
        
        if (isLoading) {
            // return <p>Loading from isLoading: true</p>
            return <MyLoader />
        }
        console.log(this.state)
        return (
          <ul>
            {hits.map(hit =>
              <li key={hit.objectID}>
                <a href={hit.url}>{hit.title}</a>
                <p>Written by {hit.author}</p>
              </li>
            )}
          </ul>
        );
      }
}