import './App.css';

function App() {
  return (
    <>
      <p class="title">Todo List</p>
        <div class = "input-format">
            <input placeholder="Todo Name" class="input-area"/>
            <input type="date" class="input-date"/>
            <button onclick="add()" class="input-button">Add</button>
        </div>
        <div class="show"></div>
    </>
  );
}

export default App;
