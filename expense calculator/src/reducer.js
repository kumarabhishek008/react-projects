
import {createStore, combineReducers} from 'redux';


const newEle = {
  user:"will",
  tweet:"2"
}

const userReduecer =(state=newEle.user,action)=>{
    if (action.type == "a")
  {
    return action.payload.name;
  }
    return state;
  
}

const TweetReducer=(state=newEle.tweet,action)=>{
  return state
}

const reducers = combineReducers({user:userReduecer,tweet:TweetReducer
}) ;

  


const store = createStore(reducers);

store.subscribe(()=>{
  console.log("store created",store.getState())
});

store.dispatch({type:"a" , payload:{name:"abhishek"}});
ReactDOM.render(
 
    <App />,
 
  document.getElementById('root')
);