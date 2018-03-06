import React from 'react';
import { signupRequest, signinRequest } from '../../action/action-auth';
import AuthForm from '../auth/auth-form'

class Landing extends React.Component {
  render() { 
    console.log('__LANDING_PROPS__', this.props)
    let {params} = this.props.match;
    let onComplete = params.auth === 'signup'
      ? this.props.signin
      : this.props.signup
    return (
      <div>
        <h1>Hello World</h1>
        <AuthForm
          auth={params.auth}
          onComplete={onComplete} />
      </div>
     )
  }
}

let mapStateToProps  = () => ({});
let mapDispacthToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user),
  signin: user => dispatch(signinRequest)(user),
});
 
export default connect (mapStateToProps, mapDispacthToProps)(Landing);