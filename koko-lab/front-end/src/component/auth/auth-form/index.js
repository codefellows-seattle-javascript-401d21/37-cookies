import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
     }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      name: value,
      usernameError: name === 'username' && !value ? 'Username required' : null,
      emailError: name === 'email' && !value.trim() ? 'Email required' : null,
      passwordError name === 'password' && !value.trim() ? 'Password required' : null,
    })
  }
  handleSubmit(event){
    event.preventDefault()
    let {username, email, password} = this.state
    this.props.onComplete({username, email, password})
      .then(() => this.setState({username, email, password}))
      .catch(error => this.setState({error}))
  }
  render() { 
    return (  )
  }
}
 
