import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Tomato',
      price: 6000,
      date: new Date("2022-3-19"),
    },
    {
      id: 'e2',
      title: 'Eggs', 
      price: 7000, 
      date: new Date("2022-3-19")
    },
    {
      id: 'e3',
      title: 'Breads',
      price: 5000,
      date: new Date("2022-3-19"),
    },
    {
      id: 'e4',
      title: 'Transportation',
      price: 5000,
      date: new Date("2022-3-19"),
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
