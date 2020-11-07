export const initialState = {
    marbles: [],
    gallery: [],
    services: []
  };
  
  export function reducer(state=initialState, action) {
    console.log(action, state)
    switch (action.type) {
      case "SET_MARBLES": 
      return {
        ...state,
        marbles: action.marbles
      }
      
     break;
  
     case "SET_SERVICES": 
     return {
       ...state,
       services: action.services
     }
     break;

     case "SET_GALLERY": 
      return {
        ...state,
        gallery: action.gallery
      };

      break
  
      default:
        return state;
    }
  }