import React from 'react'
import Landing from './landing/index'
import Navbar from './navbar/index'
import Content from './content/index'
import {Provider} from 'react-redux'
import createStore from '../lib/app-create-store'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

const store = createStore()

export default class App extends React.Component {
    componentWillMount(){
        if(localStorage.token)
            store.dispatch({type: 'TOKEN_SET', payload: localStorage.token})
    }

    render() {
        let {token} = store.getState()
        console.log(token)
        return (
            <main className="application">
                <Provider store={store}>
                    <BrowserRouter>
                        <React.Fragment>
                            <Navbar token={token}/>
                            <Route exact path="/welcome/:auth" component={props =>
                                token
                                    ? <Redirect to="/content"/> 
                                    : <Landing {...props}/>}
                            /> 
                            <Route exact path="/content" component={() =>
                                token 
                                    ? <Content token={token}/>
                                    : <Redirect to ="/welcome/signin"/>}
                            />
                        </React.Fragment>
                    </BrowserRouter>
                </Provider>
            </main>
        )
    }
}