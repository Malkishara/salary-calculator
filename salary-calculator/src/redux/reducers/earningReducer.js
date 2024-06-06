import { ADD_EARNING, DELETE_EARNING,RESET_EARNING } from "../actions/earningActions";

const initialState = {
  earnings: [] 
};

const earningReducer = (state = initialState, action) => {
  console.log("earning reducer: ", state);
  console.log("earning reducer action: ", action);

  switch (action.type) {
    case ADD_EARNING:
      return {
        ...state,
        earnings: [action.payload, ...state.earnings]
      };
    case DELETE_EARNING:
      return {
        ...state,
        earnings: state.earnings.filter((earning) => earning.id !== action.payload)
      };

      case RESET_EARNING:
               return {
                 ...state,
                 earnings: []
               };  
    default:
      return state;
  }
};

export default earningReducer;

