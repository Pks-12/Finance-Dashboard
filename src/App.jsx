import { useState,useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Transactions from "./Components/Transactions/Transactions";
import Insights from "./Components/Insights/Insights";
import transactionsData from "./Data/transactions"; // make sure this import exists
function App() {
  const [role, setRole] = useState("Viewer");
  const [activePage, setActivePage] = useState("dashboard");
  const [transactionsList, setTransactionsList] = useState(transactionsData);
const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar
  setActivePage={setActivePage}
  className={sidebarActive ? "active" : ""}
/>

      <div style={{ width: "100%" }}>
        {/* Navbar */}
        <Navbar role={role} setRole={setRole}  setSidebarActive={setSidebarActive}/>

        {/* Page Content */}
        {activePage === "dashboard" && <Dashboard />}

        {activePage === "transactions" && (
          <Transactions
            role={role}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
          />
        )}

        {activePage === "insights" && (
          <Insights transactionsList={transactionsList} />
        )}
      </div>
    </div>
  );
}

export default App;