import { put, takeLatest } from "redux-saga/effects";
import { history } from "../../App";


export const authReducer = function(state, {type, user_id}) {
    if (state === undefined) {
        if(localStorage.user_id) {
            type = "AUTH_LOGIN";
            user_id = localStorage.user_id;
            
            
        } else {
            type = "AUTH_LOGOUT";
        };
    };
    if (type === "AUTH_LOGIN") {
        localStorage.user_id = user_id;
        
        return {
            user_id: user_id
        }
        
    };
    if (type === "AUTH_LOGOUT") {
        localStorage.removeItem("user_id");
        return {};
    };
  
    return state || {};
  };
  
  export const actionAuthLogin  = (user_id) => ({type: "AUTH_LOGIN", user_id});
  export const actionAuthLogout = () => ({type: "AUTH_LOGOUT"});
  

  export function* logoutWorker() {
    yield put(actionAuthLogout());
      // Редирект на сторінку логіну
    history.push('/login');
    console.log('logout saga');
}
export function* loginWorker(action) {
    yield put(actionAuthLogin(action.result));
}

  export function* authWatcher() {
    yield takeLatest("LOGIN", loginWorker);
    yield takeLatest("LOGOUT", logoutWorker);
}