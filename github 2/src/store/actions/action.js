import axios from "axios";

export const changeUsername = e => {
    console.log("recive",e)
    return {
        type: "CHANGE",
        e : e
    }
}

export const getUserData = (e,username) => {
    e.persist();
    return async dispatch => {
        try{
            const resp = await fetch(`https://api.github.com/search/users?q=${username}+in:name&sort=repositories&order=desc`);
            const data = await resp.json();
            
            dispatch({
                type : "SUBMIT",
                e : e,
                data
            })
        }catch(er){

        }
    }

}