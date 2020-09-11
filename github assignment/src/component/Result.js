import React,{useContext} from 'react'
import {Acontext} from './SearchBar';
const Result = () => {
    const result = useContext(Acontext);
    console.log(result);
    const listRepos =result=="" ? result.users.map((item) => 
    <li>{item.login}</li>
    ) : <li>nothing</li>
    return (
        <div>
            <ul>
            {listRepos}
            </ul>
            
        </div>
    )
}

export default Result
