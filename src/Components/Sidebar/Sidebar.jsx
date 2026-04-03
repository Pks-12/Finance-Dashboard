import "./Sidebar.css";

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">

      <button onClick={() => setActivePage("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => setActivePage("transactions")}>
        Transactions
      </button>

      <button onClick={() => setActivePage("insights")}>
        Insights
      </button>

    </div>
  );
}

export default Sidebar;
