function App() {
  const param = document.createElement('p')
  param.textContent = 'This is also visible!'
  document.getElementById('root').append(param)
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!(pretty cute)</p>
    </div>
  );
}

export default App;
