export const GET_INCOME = 'GET_INCOME';
export const SET_INCOME = 'SET_INCOME';

export const getIncome = (user_id) => ({
    type: GET_INCOME,
    user_id
});

export const setIncome = (incomes) => ({
    type: SET_INCOME,
    incomes
});