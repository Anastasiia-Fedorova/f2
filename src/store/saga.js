import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GET_DASHBOARD, setDashboard} from './actions/getDashboardAction';
import { GET_INCOME, setIncome } from './actions/getIncomeActions';
import { GET_EXPENSES, setExpenses } from './actions/getExpensesActions';



export async function requestGetDashboard(user_id) {
    return axios.get(`https://fintracker-cpbg.onrender.com/dashboard/${user_id}`)
}

export function* handleGetDashboard(action) {
    try{
        const response = yield call(() => requestGetDashboard(action.user_id));
        const {data} = response;
        yield put(setDashboard(data));
    } catch(error) {
        console.log(error);
    }
}

export async function requestGetIncomes(user_id) {
    return axios.get(`https://fintracker-cpbg.onrender.com/incomes/${user_id}`)
}

export function* handleGetIncomes(action) {
    try{
        const response = yield call(() => requestGetIncomes(action.user_id));
        const {data} = response;
        console.log(data);
        yield put(setIncome(data));
    } catch(error) {
        console.log(error);
    }
}

export async function requestGetExpenses(user_id) {
    return axios.get(`https://fintracker-cpbg.onrender.com/expenses/${user_id}`)
}

export function* handleGetExpenses(action) {
    try{
        const response = yield call(() => requestGetExpenses(action.user_id));
        const {data} = response;
        console.log(data);
        yield put(setExpenses(data));
    } catch(error) {
        console.log(error);
    }
}

export function* watcherSaga () {
    yield takeLatest(GET_DASHBOARD, handleGetDashboard);
    yield takeLatest(GET_INCOME, handleGetIncomes);
    yield takeLatest(GET_EXPENSES, handleGetExpenses);
}