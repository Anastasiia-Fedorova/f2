import './App.css';
import { createBrowserHistory } from 'history';
import { Main } from './routing/Routes';
import { store } from './store/store';
import { getDashboard } from './store/actions/getDashboardAction';
import { Provider, useDispatch} from 'react-redux'
import { useEffect} from 'react'


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