import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../../store/actions/getExpensesActions";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import ExpenseBarChart from "../../components/addIncomeComponents/ExpenseChart";



export let ExpensesPage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExpenses(localStorage.user_id))
    }, []);
  
    const categories = useSelector((state) => state?.promiseReducer?.expenses?.categories);
    const summary = useSelector((state) => state?.promiseReducer?.expenses?.summary);
    const transactions = useSelector((state) => state?.promiseReducer?.expenses?.transactions);

return (
    <div className="income-outside">
        <Sidebar />
        <div className="main-content">
            <Header />
            <div className="income-inner">

                <div className="income-data">
                    <div className="income-form-outer">

                        <div className="income-span">
                            <span> Add expense </span>
                        </div>
                        <div className="income-form">

                        </div>
                    </div>

                    <div className="income-diagram-outer">
                        <div className="income-span">
                            <span> My Expenses </span>
                        </div>
                        <div className="income-diagram">
                            <ExpenseBarChart summary={summary}/>
                        </div>
                    </div>

                </div>

                <div className="income-transactions">

                </div>


            </div>
        </div>
    </div>
)
}