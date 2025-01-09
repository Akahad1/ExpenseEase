// pages/expense-tracker.js
"use client";
import { useState } from "react";
import "./ExpenseTracker.css";

export default function ExpenseTracker() {
  // const dispatch = useDispatch();
  // const expenses = useSelector((state) => state.expenses.items);

  const [form, setForm] = useState({
    category: "",
    purpose: "",
    amount: "",
  });

  // useEffect(() => {
  //   dispatch(fetchExpenses());
  // }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = new Date();
    const expenseData = {
      ...form,
      date: currentDate.toISOString(),
    };
    console.log(expenseData);
    //   dispatch(addExpense(expenseData));
    setForm({ category: "", purpose: "", amount: "" });
  };

  return (
    <div className="container">
      <div className="expense-container">
        <h1>Expense Tracker</h1>
        <form onSubmit={handleSubmit} className="expense-form">
          <label>Category:</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            {[
              "Groceries",
              "Transportation",
              "Healthcare",
              "Utility",
              "Charity",
              "Miscellaneous",
            ].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label>Purpose:</label>
          <input
            type="text"
            value={form.purpose}
            onChange={(e) => setForm({ ...form, purpose: e.target.value })}
            required
          />

          <label>Amount:</label>
          <input
            type="number"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />

          <button type="submit">Add Expense</button>
        </form>

        {/* <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.category}: {expense.purpose} - ${expense.amount} on {new Date(expense.date).toLocaleString()}
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
}
