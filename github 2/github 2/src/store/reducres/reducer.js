const initState ={
    usernames : [],
    repos : [],
    id: [],
    followers: [],
    users_avatar : [],
    message : "",
    grabbedData : false
}
console.log(initState)
const reducer = (state=initState,action) =>{
    switch(action.type){
        case "CHANGE":
             let currentUsername=action.e.target.value;
             console.log(action.e.target.value)
             return{
                 ...state,
                usernames :currentUsername
             } 
        case "SUBMIT":
            //console.log(action.data)
            const usersLogin=action.data.items.map((items)=>items.login)
            const usersRepos=action.data.items.map((items)=>items.repos_url)
            const usersAvatar=action.data.items.map((items)=>items.avatar_url)
            const usersFollowers=action.data.items.map((items)=>items.followers_url)
            const usersId=action.data.items.map((items)=>items.id)
            
            if(action.data.total_count !== 0){
                return{
                ...state,
                usernames : usersLogin,
                repos : usersRepos,
                id : usersId,
                followers: usersFollowers,
                users_avatar : usersAvatar,
                grabbedData : true

                }
            }else{
                    return {
                        ...state,message : "user not found"
                    }

                }

            
        default:
            return state;
    }
    
}



export default reducer