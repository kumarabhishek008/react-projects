import React,{useState,useRef,useEffect,createContext} from 'react'
import {connect} from 'react-redux';
//import {NavLink,Link} from 'react-dom-router'
import { Item } from 'semantic-ui-react';
import * as actionCreater from '../store/actions/action'
import  ShowProfiles  from './ShowProfiles';

const ShowContext = createContext()
function Api(props) {
    const [inputText,setInputText] = useState('');
    const inputRef = useRef(0)
    useEffect(()=>{
        
    })
    const handleUserName =(e)=> {
        //props.changeUsername(e)
        setInputText(e.target.value)
        console.log(inputRef.current.value)
        
    };
    const handleSubmit = (e) => {
        props.getUserData(e,inputText);
        setInputText(inputText)
        console.log(inputText)
    }

    const handlePage = (e) => {
        props.fetchUserData(e,e.target.innerText)
        console.log(e.target.innerText)
    }
    if(props.grabbedUserData === true){
            
        return <ShowProfiles/>;
    }

     
    const  {usernames} = props 
    
    //const listOfUsers = username.map((item)=><li>{item}</li>)
    return (
        
        <div>
            <ShowContext.Provider value={inputText}/>
            <input ref={inputRef} type ="text" placeholder="enter github username"  onChange={handleUserName}/>
            <br/>
            <button type="submit" onClick={handleSubmit}>search</button>
            <h2>{props.message}</h2>
            <h3>{usernames.length >=0 ? usernames.map((item,i)=><li ref={inputRef} onClick={handlePage} key={i}>{item}</li> ): null }</h3>
            
            
           
        </div>
    )
}

const mapStateToProps = state => {
    return{
        usernames : state.usernames,
        repos : state.repos,
        id : state.id,
        users_avatar:state.users_avatar,
        followers: state.followers,
        message : state.message,
        grabbedData : state.grabbedData,
        grabbedUserData : state.grabbedUserData
    }
};

const mapDispatchToProps = dispatch => {
    return{
        changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        getUserData:(e, username)=>dispatch(actionCreater.getUserData(e,username)),
        fetchUserData:(e, login)=>dispatch(actionCreater.fetchUserData(e,login))
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Api);
export {ShowContext}