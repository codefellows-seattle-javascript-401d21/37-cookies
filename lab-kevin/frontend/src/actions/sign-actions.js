import superagent from 'superagent';

const tokenSet = token => {
  return {
    type: 'TOKEN_SET',
    payload: token,
  };
};


const tokendelete = () => {
  return {
    type: 'TOKEN_DELETE',
  };
};

const signUpRequest = user => dispatch => {
  superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => dispatch(tokenSet(res.text)));

};

const signInRequest = user => dispatch => {
  superagent.get(`${__API_URL__}/login`)
    .auth(user.name, user.password)
    .then(res => dispatch(tokenSet(res.text)));
};

export default {tokenSet, tokendelete, signInRequest, signUpRequest};