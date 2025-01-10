// pages/expense-tracker.js
"use client";
import { useState } from "react";
import "./ExpenseTracker.css";
import { useAddExpenseApiMutation } from "../GobalRedux/Features/ExpenseApi/ExpenseApi";
import { toast, Toaster } from "sonner";
import Cookies from "js-cookie";

export default function ExpenseTracker() {
  const userCookie = Cookies.get("user");
  let userId: unknown;
  if (userCookie) {
    const userObject = JSON.parse(userCookie);

    // Access the userId property
    userId = userObject.userId;

    console.log("User ID:", userId);
  }

  const [form, setForm] = useState({
    category: "",
    purpose: "",
    amount: "",
    categoryLimits: "",
    userId: userId,
  });
  const [addExpense] = useAddExpenseApiMutation();
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseFloat(form.amount) > parseFloat(form.categoryLimits)) {
      setError("The amount exceeds the category limit!");
      return;
    }

    setError("");
    setForm({
      category: "",
      purpose: "",
      amount: "",
      categoryLimits: "",
      userId: userId,
    });
    console.log(form);

    try {
      const res = await addExpense(form);
      toast.success("Expense created successfully");
      <Toaster />;
      if (res.error) {
        toast.error("Something went wrong");
      } else {
        toast.success("Expense created successfully");
      }
    } catch (error) {
      console.log("Error:", error);
    }
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
            style={{
              borderColor:
                parseFloat(form.amount) > parseFloat(form.categoryLimits)
                  ? "red"
                  : "",
              borderWidth:
                parseFloat(form.amount) > parseFloat(form.categoryLimits)
                  ? "2px"
                  : "1px",
            }}
          />

          <label>Limit:</label>
          <input
            type="number"
            value={form.categoryLimits}
            onChange={(e) =>
              setForm({ ...form, categoryLimits: e.target.value })
            }
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
}
