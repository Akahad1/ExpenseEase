import ExpenseTracker from "@/component/ExpenseTracker/ExpenseTracker";
import FirstTime from "@/component/FirstTime/FirstTime";

export default function Home() {
  return (
    <div>
      <FirstTime></FirstTime>
      <ExpenseTracker></ExpenseTracker>
    </div>
  );
}
