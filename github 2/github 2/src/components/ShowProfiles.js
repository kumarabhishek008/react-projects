import React,{useContext} from 'react'
import {ShowContext} from './api'


const ShowProfiles = (props) => {
    const inputText = useContext(ShowContext)
    console.log(inputText)
    return (
        <div>
            <h1>hello user</h1>
        </div>
    )
}

const mapStateToProps = State =>{
    return {

    }
};
export {ShowProfiles}