const transactions = [

    { id: 1, date: "2026-01-01", amount: 35000, category: "Salary", type: "Income" },
    { id: 2, date: "2026-01-03", amount: 300, category: "Groceries", type: "Expense" },
    { id: 3, date: "2026-01-05", amount: 150, category: "Transport", type: "Expense" },
    { id: 4, date: "2026-01-10", amount: 450, category: "Entertainment", type: "Expense" },
    { id: 5, date: "2026-01-15", amount: 4000, category: "Freelance", type: "Income" },
    { id: 6, date: "2026-01-20", amount: 300, category: "Utilities", type: "Expense" },
    { id: 7, date: "2026-01-25", amount: 280, category: "Groceries", type: "Expense" },


    { id: 8, date: "2026-02-01", amount: 28000, category: "Salary", type: "Income" },
    { id: 9, date: "2026-02-05", amount: 300, category: "Transport", type: "Expense" },
    { id: 10, date: "2026-02-08", amount: 100, category: "Utilities", type: "Expense" },
    { id: 11, date: "2026-02-10", amount: 250, category: "Groceries", type: "Expense" },
    { id: 12, date: "2026-02-15", amount: 5000, category: "Freelance", type: "Income" },


    { id: 13, date: "2026-03-01", amount: 35000, category: "Salary", type: "Income" },
    { id: 14, date: "2026-03-02", amount: 150, category: "Groceries", type: "Expense" },
    { id: 15, date: "2026-03-03", amount: 60, category: "Transport", type: "Expense" },
    { id: 16, date: "2026-03-04", amount: 10000, category: "Rent", type: "Expense" },
    { id: 17, date: "2026-03-05", amount: 700, category: "Entertainment", type: "Expense" },
    { id: 18, date: "2026-03-06", amount: 400, category: "Food & Dining", type: "Expense" },
    { id: 19, date: "2026-03-07", amount: 5000, category: "Freelance", type: "Income" },
    { id: 20, date: "2026-03-08", amount: 300, category: "Groceries", type: "Expense" },
    { id: 21, date: "2026-03-09", amount: 1200, category: "Shopping", type: "Expense" },
    { id: 22, date: "2026-03-10", amount: 500, category: "Utilities", type: "Expense" },
    { id: 23, date: "2026-03-11", amount: 200, category: "Transport", type: "Expense" },
    { id: 24, date: "2026-03-12", amount: 300, category: "Bills", type: "Expense" },
    { id: 25, date: "2026-03-13", amount: 300, category: "Entertainment", type: "Expense" },
    { id: 26, date: "2026-03-14", amount: 20, category: "Food & Dining", type: "Expense" },
    { id: 27, date: "2026-03-15", amount: 200, category: "Food & Dining", type: "Expense" },
    { id: 28, date: "2026-03-16", amount: 1200, category: "Education", type: "Expense" },


    { id: 29, date: "2025-12-01", amount: 32000, category: "Salary", type: "Income" },
    { id: 30, date: "2025-12-03", amount: 200, category: "Groceries", type: "Expense" },
    { id: 31, date: "2025-12-05", amount: 7000, category: "Rent", type: "Expense" },
    { id: 32, date: "2025-12-08", amount: 400, category: "Utilities", type: "Expense" },
    { id: 33, date: "2025-12-10", amount: 3000, category: "Freelance", type: "Income" },


    { id: 34, date: "2025-11-01", amount: 31000, category: "Salary", type: "Income" },
    { id: 35, date: "2025-11-04", amount: 250, category: "Groceries", type: "Expense" },
    { id: 36, date: "2025-11-06", amount: 6500, category: "Rent", type: "Expense" },
    { id: 37, date: "2025-11-09", amount: 500, category: "Shopping", type: "Expense" },
    { id: 38, date: "2025-11-12", amount: 2000, category: "Freelance", type: "Income" },


    { id: 39, date: "2025-10-01", amount: 30000, category: "Salary", type: "Income" },
    { id: 40, date: "2025-10-03", amount: 150, category: "Transport", type: "Expense" },
    { id: 41, date: "2025-10-05", amount: 6000, category: "Rent", type: "Expense" },
    { id: 42, date: "2025-10-07", amount: 300, category: "Entertainment", type: "Expense" },
    { id: 43, date: "2025-10-10", amount: 2500, category: "Freelance", type: "Income" },


    { id: 44, date: "2025-09-01", amount: 29000, category: "Salary", type: "Income" },
    { id: 45, date: "2025-09-04", amount: 200, category: "Groceries", type: "Expense" },
    { id: 46, date: "2025-09-06", amount: 5500, category: "Rent", type: "Expense" },
    { id: 47, date: "2025-09-08", amount: 400, category: "Utilities", type: "Expense" },
    { id: 48, date: "2025-09-12", amount: 1500, category: "Freelance", type: "Income" },


    { id: 49, date: "2025-08-01", amount: 28000, category: "Salary", type: "Income" },
    { id: 50, date: "2025-08-05", amount: 5000, category: "Rent", type: "Expense" },
    { id: 51, date: "2025-08-10", amount: 1200, category: "Shopping", type: "Expense" },
    { id: 52, date: "2025-08-15", amount: 2000, category: "Freelance", type: "Income" },


    { id: 53, date: "2025-07-01", amount: 27000, category: "Salary", type: "Income" },
    { id: 54, date: "2025-07-03", amount: 300, category: "Groceries", type: "Expense" },
    { id: 55, date: "2025-07-07", amount: 4500, category: "Rent", type: "Expense" },
    { id: 56, date: "2025-07-12", amount: 700, category: "Travel", type: "Expense" },


    { id: 57, date: "2025-06-01", amount: 26000, category: "Salary", type: "Income" },
    { id: 58, date: "2025-06-04", amount: 200, category: "Transport", type: "Expense" },
    { id: 59, date: "2025-06-08", amount: 4000, category: "Rent", type: "Expense" },
    { id: 60, date: "2025-06-15", amount: 1500, category: "Freelance", type: "Income" },


    { id: 61, date: "2025-05-01", amount: 25000, category: "Salary", type: "Income" },
    { id: 62, date: "2025-05-03", amount: 200, category: "Transport", type: "Expense" },
    { id: 63, date: "2025-05-05", amount: 8000, category: "Rent", type: "Expense" },
    { id: 64, date: "2025-05-06", amount: 20, category: "Chai", type: "Expense" },
    { id: 65, date: "2025-05-08", amount: 300, category: "Bills", type: "Expense" },
    { id: 66, date: "2025-05-13", amount: 2000, category: "Freelance", type: "Income" },
    { id: 67, date: "2025-05-17", amount: 300, category: "Food & Dining", type: "Expense" },
    { id: 68, date: "2025-05-25", amount: 1500, category: "Shopping", type: "Expense" },

];

export default transactions;
