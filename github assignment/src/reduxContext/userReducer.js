

export const initialState = []

const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case "RECIEVE_USER":
            return {...state,users:action.payload}

            break;
        case "ERR":
            return {...state,error:action.payload}
            break;
        case "RECIEVED_USER":
            return {...state, users:action.payload}
        default:
            return state
            break;
    }

}

export default reducer