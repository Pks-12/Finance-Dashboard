import React, { useState } from "react";
import transactions from "../../Data/transactions";
import "./Transactions.css";

function Transactions({ role }) {
  const [transactionsList, setTransactionsList] = useState(transactions);
  const [filterType, setFilterType] = useState("All"); // All, Income, Expense
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // asc or desc

  // Admin form state
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    category: "",
    amount: "",
    type: "Income",
  });

  // Editing state
  const [editingId, setEditingId] = useState(null);
  const [editingTransaction, setEditingTransaction] = useState({
    date: "",
    category: "",
    amount: "",
    type: "Income",
  });

  // Handle input changes for add form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  // Add new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (role === "Admin") {
      const transaction = {
        id: transactionsList.length + 1,
        date: newTransaction.date || new Date().toISOString().split("T")[0],
        category: newTransaction.category || "Misc",
        amount: Number(newTransaction.amount) || 0,
        type: newTransaction.type,
      };
      setTransactionsList([transaction, ...transactionsList]);

      // Reset form
      setNewTransaction({ date: "", category: "", amount: "", type: "Income" });
    }
  };

  // Start editing
  const handleEditClick = (transaction) => {
    setEditingId(transaction.id);
    setEditingTransaction({
      date: transaction.date,
      category: transaction.category,
      amount: transaction.amount,
      type: transaction.type,
    });
  };

  // Handle changes while editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTransaction({ ...editingTransaction, [name]: value });
  };

  // Save edited transaction
  const handleSaveEdit = (id) => {
    const updatedList = transactionsList.map((t) =>
      t.id === id
        ? { ...t, ...editingTransaction, amount: Number(editingTransaction.amount) }
        : t
    );
    setTransactionsList(updatedList);
    setEditingId(null);
  };

  // Delete transaction
  const handleDelete = (id) => {
    const updatedList = transactionsList.filter((t) => t.id !== id);
    setTransactionsList(updatedList);
  };

  // Filter, search, and sort
  const filteredTransactions = [...transactionsList]
    .filter((t) => filterType === "All" || t.type === filterType)
    .filter(
      (t) =>
        t.category.toLowerCase().includes(searchText.toLowerCase()) ||
        t.type.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return new Date(a.date) - new Date(b.date);
      else return new Date(b.date) - new Date(a.date);
    });

  return (
    <div className="transactions-container">
      <h2>Recent Transactions</h2>

      {/* Admin Add Form */}
      {role === "Admin" && (
        <form onSubmit={handleAddTransaction} className="add-transaction-form">
          <input
            type="date"
            name="date"
            value={newTransaction.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newTransaction.category}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
            required
          />
          <select
            name="type"
            value={newTransaction.type}
            onChange={handleInputChange}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button type="submit" className="add-btn">
            Add Transaction
          </button>
        </form>
      )}

      {/* Filters */}
      <div className="transactions-filters">
        <div>
          <label>Filter by Type: </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Search by category or type"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div>
          <label>Sort by Date: </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "Admin" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t) => (
            <tr key={t.id}>
              {editingId === t.id ? (
                <>
                  <td>
                    <input
                      type="date"
                      name="date"
                      value={editingTransaction.date}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="category"
                      value={editingTransaction.category}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="amount"
                      value={editingTransaction.amount}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <select
                      name="type"
                      value={editingTransaction.type}
                      onChange={handleEditChange}
                    >
                      <option value="Income">Income</option>
                      <option value="Expense">Expense</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleSaveEdit(t.id)}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{new Date(t.date).toLocaleDateString()}</td>
                  <td>{t.category}</td>
                  <td>₹{t.amount}</td>
                  <td className={t.type === "Income" ? "income" : "expense"}>
                    {t.type}
                  </td>
                  {role === "Admin" && (
                    <td>
                      <button onClick={() => handleEditClick(t)}>Edit</button>
                      <button onClick={() => handleDelete(t.id)}>Delete</button>
                    </td>
                  )}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
