import React from 'react'
const API = 'https://hn.algolia.com/api/v1/search?query=';
    const DEFAULT_QUERY = 'hacker';


export default class ApiCall extends React.Component {
    
    constructor(props) {
        super(props);
     
        this.state = {
          hits: [],
          isLoading: false,
        };
        console.log(this.state)
      }
      
    

      componentDidMount() {

        this.setState({ isLoading: true })
        fetch(API + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => this.setState({ hits: data.hits, isLoading: false }));
          
      };
 
       render() {
        const { hits, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading from isLoading: true</p>
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