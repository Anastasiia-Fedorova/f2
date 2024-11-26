import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getIncome } from "../../store/actions/getIncomeActions";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import './incomes-page.css'
import IncomeBarChart from "../../components/addIncomeComponents/IncomeChart";



export let IncomePage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIncome(localStorage.user_id))
    }, []);
  
    const categories = useSelector((state) => state?.promiseReducer?.incomes?.categories);
    const summary = useSelector((state) => state?.promiseReducer?.incomes?.summary);
    const transactions = useSelector((state) => state?.promiseReducer?.incomes?.transactions);


return (
    <div className="income-outside">
        <Sidebar />
        <div className="main-content">
        <Header />
        <div className="income-inner">

            <div className="income-data">
                <div className="income-form-outer">

                <div className="income-span">
                        <span> Add income </span>
                </div>
                <div className="income-form">

                </div>
                

                </div>

                <div className="income-diagram-outer">
                    <div className="income-span">
                        <span> My Income </span>
                    </div>
                    <div className="income-diagram">
                        <IncomeBarChart summary={summary}/>
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