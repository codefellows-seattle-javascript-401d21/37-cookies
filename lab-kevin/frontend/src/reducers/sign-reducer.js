export default (state=null, action) => {
  let {type, payload} = action;

  let takeAction = {};
  takeAction['TOKEN_SET'] = () => payload;
  takeAction['TOKEN_SET'] = () => null;

  return takeAction[type] ? takeAction[type]() : state;

};