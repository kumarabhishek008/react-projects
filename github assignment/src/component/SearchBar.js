import React,{useState,createContext} from 'react'
import {Input, Button} from 'semantic-ui-react';
import axios from 'axios';
//import FetchUser from '../reduxContext/Store'

const Acontext = createContext();
const SearchBar = () => {
    const [searchInput,setSearchInput] = useState('')
    const [repos, setRepos] = useState('');

    const handleChange =(e) =>{
        setSearchInput(e.target.value)
    }

    const handleClick = async () =>{
        console.log(searchInput)
        setRepos(searchInput);
        
        // try {
        //     const result = await axios.get(`https://api.github.com/search/users?q=a+in:name&sort=repositories&order=10`)
        // setRepos(result);
        // console.log(repos)
        // //console.log(repos.data.map((item)=><li>{item}</li>))
        // }catch(err){
        //     console.log(err)
        // }
        
    }
    
    return (
        <div>
            <Acontext.Provider value={{repos}}/>
              <Input icon='search' placeholder='Search...' value={searchInput} onChange={handleChange}/>
              <Button disabled={!searchInput} onClick={handleClick} primary>Search</Button>
        </div>
    )
}

export default SearchBar
export {Acontext}