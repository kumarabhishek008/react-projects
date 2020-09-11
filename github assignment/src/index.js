import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './App.scss'
import {applyMiddleware,createStore} from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
// thunk middle ware allow us to do multiple async action


const initialState = {
    fetching : false,
    fetched : false,
    user :[],
    error : null
}

const reducer = (state={initialState},action) =>{
    switch (action.type) {
        case "RECIEVE_USER":
            return {...state,fetching:true}
            break;
        case "ERR":
            return {...state,fetching:false,error:action.payload}
            break;
        case "RECIEVED_USER":
            return {...state,fetched:true}
        default:
            return state
            break;
    }
    
    
}

const middleware = applyMiddleware(thunk,logger)

const store = createStore(reducer,middleware)

store.dispatch((dispatch)=>{
    dispatch({type:"FETCH_USERS_"})
    axios.get("https://api.github.com/user/repos")
    .then((response)=>{
        dispatch({type:"RECIEVE_USER",payload:response.data})
    }).catch((err)=>{
        dispatch({type:"ERR",payload:"err"})
    })
})

ReactDOM.render(<App/>,document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

