export const ADD_DEDUCTION = "ADD_DEDUCTION";
export const DELETE_DEDUCTION = "DELETE_DEDUCTION";
export const RESET_DEDUCTIONS = "RESET_DEDUCTIONS"; 
export const UPDATE_DEDUCTION = "UPDATE_DEDUCTION";

export const addDeduction = (deduction) => ({
  type: ADD_DEDUCTION,
  payload: deduction
});

export const deleteDeduction = (id) => ({
  type: DELETE_DEDUCTION,
  payload: id
});

export const resetDeductions = () => ({
  type: RESET_DEDUCTIONS
});


