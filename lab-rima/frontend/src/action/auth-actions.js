import superagent from 'superagent';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = token => ({
  type: 'TOKEN_DELETE',
});

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.text))
      try{
        localStorage.setItem('token', res.text);
      }catch(err){
        console.log(err);
        throw err;
      }
    })
}

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.passowrd)
    .then(res => dispatch(tokenSet(res.text)));
}
