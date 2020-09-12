import React from 'react'
import {connect} from 'react-redux'
import { Item } from 'semantic-ui-react';
import * as actionCreater from '../store/actions/action'
import { ShowProfiles } from './ShowProfiles';
function Api(props) {
    const handleUserName =(e)=> {
        props.changeUsername(e)
        console.log(props.usernames)
    };
    const handleSubmit = (e) => {
        props.getUserData(e,props.username);
    }
    // if(props.grabbedData == true){
    //     return <ShowProfiles/>;
    // }
    const  {usernames} = props 
    console.log(props)
    //const listOfUsers = username.map((item)=><li>{item}</li>)
    return (
        <div>
            <input type ="text" placeholder="enter github username" onChange={handleUserName}/>
            <br/>
            <button type="submit" onClick={handleSubmit}>search</button>
            <h2>{props.message}</h2>
            <h3>{usernames.length ? usernames.map((item,i)=><li key={i}>{item}</li> ): null }</h3>
            
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        usernames : state.usernames,
        repos : state.repos,
        following: state.following,
        followers: state.followers,
        message : state.message,
        grabbedData : state.grabbedData
    }
};

const mapDispatchToProps = dispatch => {
    return{
        changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        getUserData:(e, username)=>dispatch(actionCreater.getUserData(e,username))
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Api);
