import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Insights.css";

function Insights({ transactionsList }) {
  // Prepare monthly totals
  const monthlyTotals = {};

  transactionsList.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", { month: "short", year: "numeric" });
    if (!monthlyTotals[month]) monthlyTotals[month] = { Income: 0, Expense: 0 };
    monthlyTotals[month][t.type] += t.amount;
  });

  const chartData = Object.keys(monthlyTotals)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((month) => ({ month, ...monthlyTotals[month] }));

  // Highest spending category
  const expenses = transactionsList.filter((t) => t.type === "Expense");
  const categoryTotals = {};
  expenses.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });
  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  , "None");

  // Latest month observation
  const months = chartData.map(d => d.month);
  const latestMonth = months[months.length - 1];
  const observation = latestMonth
    ? monthlyTotals[latestMonth].Expense > monthlyTotals[latestMonth].Income
      ? "You spent more than you earned this month."
      : "You earned more than you spent this month."
    : "No data yet.";

  return (
    <div className="insights-container">
      {/* Highest spending category */}
      <div className="insight-card">
        <h3>Highest Spending Category</h3>
        <p>{highestCategory} - ₹{categoryTotals[highestCategory] || 0}</p>
      </div>

      {/* Monthly comparison chart */}
      <div className="insight-card">
        <h3>Monthly Comparison</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#4caf50" />
            <Bar dataKey="Expense" fill="#f44336" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Observation */}
      <div className="insight-card">
        <h3>Observation</h3>
        <p>{observation}</p>
      </div>
    </div>
  );
}

export default Insights;
