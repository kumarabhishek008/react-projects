import axios from "axios";

const fetchUsers =() =>{
    return function(dispatch){
        axios.get("https://api.github.com/search/users?q=a+in:name&sort=repositories&order=desc")
        .then((response)=>{
            dispatch({type:"RECIEVED_USER",payload:response.data})
        })
    }
}

const fetchedUsers = () =>{
    return {
        type:"RECIEVE_USER",
        

    }
}

export default fetchUsers