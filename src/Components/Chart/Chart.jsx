import "./Chart.css";
import transactions from "../../Data/transactions";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell
} from "recharts";

function Chart() {

  const COLORS = [
    "#3b82f6", "#22c55e", "#ef4444", "#f59e0b",
    "#6366f1", "#ec4899", "#14b8a6", "#8b5cf6",
    "#eab308", "#0ea5e9"
  ];

  // ✅ 1. Monthly Data (Dynamic)
  const monthMap = {};

  transactions.forEach((item) => {
    const month = new Date(item.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthMap[month]) {
      monthMap[month] = { month, income: 0, expense: 0 };
    }

    if (item.type === "Income") {
      monthMap[month].income += item.amount;
    } else {
      monthMap[month].expense += item.amount;
    }
  });

  const finalMonthlyData = Object.values(monthMap);

  // ✅ 2. Category Data (Dynamic)
  const categoryMap = {};

  transactions.forEach((item) => {
    if (item.type === "Expense") {
      if (!categoryMap[item.category]) {
        categoryMap[item.category] = 0;
      }
      categoryMap[item.category] += item.amount;
    }
  });

  const finalCategoryData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // 🔥 Sort by highest expense
  finalCategoryData.sort((a, b) => b.value - a.value);

  return (
    <div className="charts">

      {/* ✅ BAR CHART */}
      <div className="chart-box">
        <h3 className="chart-title">Monthly Overview</h3>
        <BarChart width={400} height={250} data={finalMonthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#22c55e" />
          <Bar dataKey="expense" fill="#ef4444" />
        </BarChart>
      </div>

      {/* ✅ PIE CHART */}
      <div className="chart-box">
        <h3 className="chart-title">Spending Breakdown</h3>

        <div className="pie-wrapper">
          <PieChart width={250} height={250}>
            <Pie
              data={finalCategoryData}
              dataKey="value"
              outerRadius={90}
              innerRadius={50}
              paddingAngle={3}
            >
              {finalCategoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          {/* ✅ Legend */}
          <div className="legend">
            {finalCategoryData.map((item, index) => (
              <div key={index} className="legend-item">
                <span
                  className="color-box"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="legend-text">{item.name}</span>
                <span className="legend-value">₹{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Chart;
