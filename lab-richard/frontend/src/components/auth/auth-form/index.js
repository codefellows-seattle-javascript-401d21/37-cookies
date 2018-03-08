import React from 'react'
import {renderIf} from '../../../lib/utils'
// import {Redirect} from 'react-router-dom'

export default class AuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            usernameError: null,
            emailError: null,
            passwordError: null,
            error: null,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let {name, value} = e.target
        this.setState({
            [name]: value,
            usernameError: name === 'username' && !value.trim() ? 'Username required' : null,
            emailError: name === 'email' && !value.trim() ? 'Email Required' : null,
            passwordError: name === 'password' && !value.trim() ? 'Password Required' : null,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let {username, email, password} = this.state;
        this.props.onComplete({username, email, password})
            .then(() => this.setState({username: '', email: '', password: ''}))
            .then(() => this.props.redirect('/content'))
            .catch(error => this.setState({error}))
    }

    render() {
        return (
            <form 
                className="auth-form"
                onSubmit={this.handleSubmit}
                noValidate>

                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                
                {renderIf(this.state.usernameError, <span className="tooltip">{this.state.usernameError}</span>)}
                
                {renderIf(this.props.auth === 'signup',                
                
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                )}

                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                
                <button type="submit">{this.props.auth}</button>
            
            </form>
        )
    }
}