"use client";
import Cookies from "js-cookie";
import { useGetSummaryQuery } from "../GobalRedux/Features/ExpenseApi/ExpenseApi";
import "./Summary.css";

interface ExpenseDetail {
  purpose: string;
  amount: number;
}

interface ExpenseSummary {
  _id: {
    date: string;
    category: string;
  };
  totalAmount: number;
  details: ExpenseDetail[];
}

export default function ExpenseSummary() {
  const userCookie = Cookies.get("user");
  let userId: unknown;
  if (userCookie) {
    const userObject = JSON.parse(userCookie);

    // Access the userId property
    userId = userObject.userId;

    console.log("User ID:", userId);
  }
  const { data: expenses, isLoading } = useGetSummaryQuery(userId);
  if (isLoading) {
    return "";
  }
  console.log(expenses);
  return (
    <div className="expense-summary">
      <h1>Daily Categorized Expense Summary</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : Object.keys(expenses).length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <div className="expense-list">
          {Object.keys(expenses).map((date) => (
            <div key={date} className="expense-item">
              <h3 className="expense-date">Date: {date}</h3>
              <p className="expense-total">
                Total: ${expenses[date].total.toFixed(2)}
              </p>
              <div className="expense-categories">
                {expenses[date].categories.map(
                  (category: ExpenseSummary, index: number) => (
                    <div key={index} className="category-summary">
                      <h4>Category: {category._id.category}</h4>
                      <p>
                        Total for Category: ${category.totalAmount.toFixed(2)}
                      </p>
                      <div className="expense-details">
                        {category.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="expense-detail"
                            title={`Purpose: ${detail.purpose} | Amount: $${detail.amount}`}
                          >
                            <p>{detail.purpose}</p>
                            <p>${detail.amount.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
