import { ENTER_BASIC_SALARY,RESET_BASIC_SALARY } from "../actions/basicSalaryActions";

const initialState = {
    salary: 0
};

const basicSalaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_BASIC_SALARY:
            return {
                ...state,
                salary: action.payload
            };

            case RESET_BASIC_SALARY:
                return {
                  ...state,
                  salary: 0
                };    
        default:
            return state;
    }
};

export default basicSalaryReducer;
