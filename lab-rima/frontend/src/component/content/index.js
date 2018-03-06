import React from 'react';

export default class Content extends React.Component {
  render(){
    return (
      <div>
        <h1>You are authorized!</h1>
        <p>TOKEN: to remove later: {this.props.token}</p>
      </div>
    )
  }
}
