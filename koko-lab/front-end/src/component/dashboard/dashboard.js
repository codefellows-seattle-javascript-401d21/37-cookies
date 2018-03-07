import React from 'react';

export default class Dashboard extends React.Component {
  render() { 
    return ( 
      <div>
        <h1>Hello, I am authorized to see this!</h1>
        <p>{this.props.token}</p>
      </div>
     )
  }
}