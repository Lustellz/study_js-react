import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tomato",
    price: 6000,
    date: new Date("2022-3-19"),
  },
  {
    id: "e2",
    title: "Eggs",
    price: 7000,
    date: new Date("2022-3-19"),
  },
  {
    id: "e3",
    title: "Breads",
    price: 5000,
    date: new Date("2022-3-19"),
  },
  {
    id: "e4",
    title: "Transportation",
    price: 5000,
    date: new Date("2022-3-19"),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
