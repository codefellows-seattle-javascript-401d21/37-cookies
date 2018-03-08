let reporter = store => next => action => {
  try {
    let result = next(action)
    return result
  } catch(e) {
    e.action = action
    return e
  }
}

export default reporter