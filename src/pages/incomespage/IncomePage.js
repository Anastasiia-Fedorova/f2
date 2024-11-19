import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getIncome } from "../../store/actions/getIncomeActions";



export let IncomePage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIncome(localStorage.user_id))
    }, []);
  
    const categories = useSelector((state) => state?.promiseReducer?.incomes?.categories);
    const summary = useSelector((state) => state?.promiseReducer?.incomes?.summary);
    const transactions = useSelector((state) => state?.promiseReducer?.incomes?.transactions);

    // console.log(categories);
return (
    <div className="income-page">Incomes</div>
)
}