let InitialState = "block"
export default function Sliderfunc(state = InitialState,action){

    if(action.payload === "block"){

        return InitialState = "none"
        
    
    }
    else if(action.payload === "none"){

        return InitialState = "none"

    }
  return state
}