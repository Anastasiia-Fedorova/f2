import './App.css';
import { createBrowserHistory } from 'history';
import { Main } from './routing/Routes';
import { store } from './store/store';
import { getDashboard } from './store/actions/getDashboardAction';
import { Provider, useDispatch, useSelector} from 'react-redux'
import { useEffect} from 'react'
import { getIncome } from './store/actions/getIncomeActions';


export let history = createBrowserHistory();
store.subscribe(() => console.log(store.getState()));

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
      dispatch(getDashboard(localStorage.user_id));
      dispatch(getIncome(localStorage.user_id))
  }, []);

  const auth = useSelector((state) => state?.authReducer);


  return (
    <Provider store={store}>
      <Main auth={auth}/>
    </Provider>
  );
}

export default App;