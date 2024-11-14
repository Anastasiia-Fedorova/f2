export const GET_DASHBOARD = 'GET_DASHBOARD';
export const SET_DASHBOARD = 'SET_DASHBOARD';

export const getDashboard = (user_id) => ({
    type: GET_DASHBOARD,
    user_id
});

export const setDashboard = (dashboard_info) => ({
    type: SET_DASHBOARD,
    dashboard_info
});