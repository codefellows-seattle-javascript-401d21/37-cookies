import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createStore from '../library/app-create-store';
import Landing from './landing/landing';
import Dashboard from './dashboard/dashboard';
const store = createStore();

export default class App extends React.Component {
  render() { 
    return ( 
      <main>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path="/welcome/:auth" component={Landing} />
              <Route exact path="/dashboard" component={() =>
                token
                  ? <Dashboard token={token}/>
                  : <Redirect to="/welcome/signup"/>
              }/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}