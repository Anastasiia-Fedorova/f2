export const GET_EXPENSES = 'GET_EXPENSES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const getExpenses = (user_id) => ({
    type: GET_EXPENSES,
    user_id
});

export const setExpenses = (expenses) => ({
    type: SET_EXPENSES,
    expenses
});