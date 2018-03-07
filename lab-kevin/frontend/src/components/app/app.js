import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import store from '../../lib/store';
import {Provider} from 'react-redux';
import Landing from '../landing';
import Dashboard from '../dashboard';

export default class App extends React.Component{
  constructor(props){
    super(props);

  }
  
  render(){
    let {token} = store.getState();
    return (
      <React.Fragment>
        <header>
          <h1>Cheeseburgers in Paradise</h1>
          <nav>
            <li>Home</li>
          </nav>
        </header>
        <Provider store={store}>
          <main>
            <Route exact path="/landing/:sign" component={Landing} />
            <Route exact path="/" component={() => 
              token ?
                <Dashboard token={token} />
                : <Redirect to="/landing/signup" />
            }/>
          </main>
        </Provider>
      </React.Fragment>  
    );
  }
}