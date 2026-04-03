import transactions from "../../Data/transactions";
import Chart from "../Chart/Chart";
import "./Dashboard.css";
function Dashboard(){
    const totalIncome = transactions
    .filter((t)=> t.type === "Income")
    .reduce((acc,t)=> acc + t.amount,0);

    const totlaExpense = transactions
    .filter((t)=> t.type === "Expense")
    .reduce((acc,t)=> acc + t.amount,0);

    const balance = totalIncome - totlaExpense;
    return(
        <>
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="cards">
                <div className="card income">
                    <h3>Total Income</h3>
                    <p>₹{totalIncome}</p>
                </div>

                <div className="card expense">
                    <h3>Total Expense</h3>
                    <p>₹{totlaExpense}</p>
                </div>

                <div className="card balance">
                    <h3>Balance</h3>
                    <p>₹{balance}</p>
                </div>
            </div>
        </div>
            <Chart/>
            </>
    )
}
export default Dashboard;
