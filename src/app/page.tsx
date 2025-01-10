import ExpenseTracker from "@/component/ExpenseTracker/ExpenseTracker";
import FirstTime from "@/component/FirstTime/FirstTime";
import "./globals.css";
import ExpenseSummary from "@/component/Summary/Summary";

export default function Home() {
  return (
    <div>
      <FirstTime></FirstTime>

      <div className="container">
        <div className="col-4">
          {" "}
          <ExpenseTracker></ExpenseTracker>
        </div>
        <div className="col-8 color">
          <ExpenseSummary></ExpenseSummary>
        </div>
      </div>
    </div>
  );
}
