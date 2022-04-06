import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  const { item } = props;

  if (item.length === 0) {
    return <p>Found no expenses.</p>;
  }

  return (
    <ul className="expenses-list">
      {item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
