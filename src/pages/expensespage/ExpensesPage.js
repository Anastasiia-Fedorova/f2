import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../../store/actions/getExpensesActions";



export let ExpensesPage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExpenses(localStorage.user_id))
    }, []);
  
    const categories = useSelector((state) => state?.promiseReducer?.expenses?.categories);
    const summary = useSelector((state) => state?.promiseReducer?.expenses?.summary);
    const transactions = useSelector((state) => state?.promiseReducer?.expenses?.transactions);

    // console.log(categories);
return (
    <div className="income-page">Expenses</div>
)
}