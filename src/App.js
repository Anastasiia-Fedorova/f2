import './App.css';
import { createBrowserHistory } from 'history';
import { Main } from './routing/Routes';
//import { store } from './store/store';
import { store } from './store/store';
import { getDashboard } from './store/actions/getDashboardAction';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios';


export let history = createBrowserHistory();
store.subscribe(() => console.log(store.getState()));

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
      dispatch(getDashboard(localStorage.user_id))
  }, []);


  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;