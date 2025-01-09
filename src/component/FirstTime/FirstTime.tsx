"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./FirstTime.css";

const FirstTime = () => {
  const [spendingLimit, setSpendingLimit] = useState("");
  const [showModal, setShowModal] = useState(false);
  const RandowId = Date.now() + Math.floor(Math.random() * 1000);
  // Get the cookie and parse it

  useEffect(() => {
    // Check if the user has already set a spending limit
    const userCookie = Cookies.get("user");

    if (!userCookie) {
      setShowModal(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!spendingLimit) {
      alert("Please enter a spending limit.");
      return;
    }

    // Save the limit to the database via API
    const response = await fetch("http://localhost:5000/monthlyLimit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: RandowId,
        monthlyLimit: spendingLimit,
      }),
    });

    if (response.ok) {
      const userObject = {
        spendingLimitSet: "true",
        userId: RandowId,
      };
      Cookies.set("user", JSON.stringify(userObject));
      setShowModal(false);
      alert("Spending limit set successfully!");
    } else {
      alert("Failed to set spending limit.");
    }
  };
  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Set Monthly Spending Limit</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Enter your limit"
                value={spendingLimit}
                onChange={(e) => setSpendingLimit(e.target.value)}
                className="modal-input"
              />
              <button type="submit" className="modal-button">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstTime;
