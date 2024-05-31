export const ADD_EARNING = "ADD_EARNING";
export const DELETE_EARNING = "DELETE_EARNING";
export const RESET_EARNING = "RESET_EARNING"; 


export const addEarning = (earning) => ({
  type: ADD_EARNING,
  payload: earning
});

export const deleteEarning = (id) => ({
  type: DELETE_EARNING,
  payload: id
});

export const resetEarning = () => ({
  type: RESET_EARNING
});

export const resetEarnings = () => ({
  type: RESET_EARNING
});