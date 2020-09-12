const initState ={
    usernames : [],
    repos : [],
    following: "",
    followers: "",
    message : "",
    grabbedData : false
}
console.log(initState)
const reducer = (state=initState,action) =>{
    switch(action.type){
        case "CHANGE":
             let currentUsername=action.e.target.value;
             return{
                 ...state,
                username :currentUsername
             } 
        case "SUBMIT":
            console.log(action.data)
            const newdata=action.data.items.map((items)=>items.login)
            console.log(newdata)
            if(action.data.total_count !== 0){
            return{
                ...state,
                usernames : newdata,
                grabbedData : true

            }}else{
                return {
                    ...state,message : "user not found"
                }

            }

            
        default:
            return state;
    }
    
}


export default reducer