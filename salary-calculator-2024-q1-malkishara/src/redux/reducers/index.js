import { combineReducers } from 'redux';
import deductionReducer from './deductionReducer';
import basicSalaryReducer from './basicSalaryReducer';
import earningReducer from './earningReducer';

const rootReducer = combineReducers({
    deductions: deductionReducer,
    earnings:earningReducer,
    salary: basicSalaryReducer
});

export default rootReducer;
