import React from 'react'
import userReducer from './userReducer' ;
import axios from "axios";
import { createStore, applyMiddleware } from 'redux'
import Axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fetchUser from './action';
import fetchUsers from './action';
import initialState from './userReducer';

// console.log(initialState.users.filter((item)=>
//     <li>item.login</li>

// ));
const store = createStore(userReducer,applyMiddleware(logger,thunk))

export function get_users(searchValue){
    store.dispatch((dispatch)=>{
    dispatch({type:"RECIEVE_USER",payload:"anonymous"})
    axios.get(`https://api.github.com/search/users?q=${searchValue}+in:name&sort=repositories&order=desc`)
    .then((response)=>{
        console.log(response,'res')
        dispatch({type:"RECIEVED_USER",payload:response.data})
    }).catch((err)=>{console.log(err)})
    })

}   
   

    

export default store
