export const ENTER_BASIC_SALARY = "ENTER_BASIC_SALARY";
export const RESET_BASIC_SALARY="RESET_BASIC_SALARY";

export const enterBasicSalary = (salary) => ({
    type: ENTER_BASIC_SALARY,
    payload: salary
});

export const resetBasicSalary = () => ({
    type: RESET_BASIC_SALARY
  });