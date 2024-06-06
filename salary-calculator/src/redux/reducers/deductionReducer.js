import { ADD_DEDUCTION, DELETE_DEDUCTION,RESET_DEDUCTIONS } from "../actions/deductionActions";

const initialState = {
  deductions: [] 
};

const deductionReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case ADD_DEDUCTION:
      return {
        ...state,
        deductions: [action.payload, ...state.deductions]
      };
    case DELETE_DEDUCTION:
      return {
        ...state,
        deductions: state.deductions.filter((deduction) => deduction.id !== action.payload)
      };

      case RESET_DEDUCTIONS:
              return {
                 ...state,
                 deductions: []
               };  
     
    default:
      return state;
  }
};

export default deductionReducer;

