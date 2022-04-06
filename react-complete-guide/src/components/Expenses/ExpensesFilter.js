import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option vale="2019">2019</option>
          <option vale="2020">2020</option>
          <option vale="2021">2021</option>
          <option vale="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
