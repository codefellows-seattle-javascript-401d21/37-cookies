let reporter = store => next => action => {
console.log('__ACTION__', action)

  try {
    let result = next(action);
    console.log('__STATE__', store.getSate())
    return result
  } catch (event) {
    event.action = action;
    console.error('__ERROE__', event);
    return event;
  }
}