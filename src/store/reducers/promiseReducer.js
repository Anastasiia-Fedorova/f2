import {SET_DASHBOARD} from '../actions/getDashboardAction'
// import {SET_FORECAST} from '../actions/getDashboardAction'
// import { SET_AQ } from '../actions/getAQ';
// import { SET_SAVEDCITY } from '../actions/getSavedCityAction';
// import { SET_CHANGE_THEME } from '../actions/changeTheme';
// import { SET_SEARCH_CITY } from '../actions/searchCity';


const initialState = {
    dashboard_info: undefined, 
    // forecast: undefined,
    // aq: undefined,
};

export let promiseReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_DASHBOARD:
            const {dashboard_info} = action;
            return {...state, dashboard_info}
        // case SET_AQ:
        //     const {aq} = action;
        //     return {...state, aq}
        // case SET_FORECAST:
        //     const {forecast} = action;
        //     return {...state, forecast}

        default:
            return state;
    }
}