import React from 'react';
import {connect} from 'react-redux';
import {signInRequest, signUpRequest} from '../../actions';
import {SignForm} from '../sign';

class Landing extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    let {params} = this.props.match;
    let onComplete = params.sign === 'signin' ?
      this.props.signin :
      this.props.signup;
  
    return (
      <section className="landing-container">
        <SignForm sign={params.sign}
          onComplete={onComplete}
        />
      </section>

    );
  }
}

const mapSateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signInRequest(user)),
  signup: user => dispatch(signUpRequest(user)),
});

export default connect(mapSateToProps , mapDispatchToProps)(Landing);

