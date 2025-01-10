import ExpenseTracker from "@/component/ExpenseTracker/ExpenseTracker";
import FirstTime from "@/component/FirstTime/FirstTime";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <FirstTime></FirstTime>

      <div className="container">
        <div className="col-4">
          {" "}
          <ExpenseTracker></ExpenseTracker>
        </div>
        <div className="col-8 color">Second Div</div>
      </div>
    </div>
  );
}
