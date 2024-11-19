import {SET_DASHBOARD} from '../actions/getDashboardAction'
import { SET_INCOME } from '../actions/getIncomeActions';


const initialState = {
    dashboard_info: undefined, 
    incomes: undefined,
};

export let promiseReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_DASHBOARD:
            const {dashboard_info} = action;
            return {...state, dashboard_info}
        case SET_INCOME:
            const {incomes} = action;
            return {...state, incomes}

        default:
            return state;
    }
}