import { Form, Segment,Button } from 'semantic-ui-react'
import React, { useState } from 'react'


function FormValues () {
   const [state,setState] = useState();
    let btnstyle = {
      width : "50%",
      boxShadow : "30px",
      padding : "20px",
      border : "1px solid lightgrey",
      position : "relative",
    }
    return (
      <div classNmae="ui container right"style={{textAlign:"right",marginLeft:"75em"}}>
        <Segment raised style={{height:"30em",width:"30em",position:"relative",boxShadow : "5px 5px 5px 5px lightgrey",borderRadius:"30px"}}>
          
            <Button basic style={btnstyle}>Check Box</Button>
            <Button basic style={btnstyle}>Submit</Button>
            <Button basic style={btnstyle}>Header</Button>
            <Button basic style={btnstyle}>Input</Button>
          
        </Segment>
      </div>
    );
  
}

export default FormValues