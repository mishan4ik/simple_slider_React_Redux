let InitialState = "none"
export default function Sliderfunc(state = InitialState,action){

    if(action.payload === "block"){

        return InitialState = "block"
        
      }
      else if(action.payload === "none"){

        return InitialState = "none"

    }
  
  return state
}