import { useState } from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  let [todoData,setTodoData] = useState([{name:"yes",dueDate:2}]);
  return (
    <div tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') add();}}>
    <ToastContainer/>
    <p className="title">Todo List</p>
      <div className = "input-format">
          <input placeholder="Todo Name" className="input-area"/>
          <input type="date" className="input-date"/>
          <button onClick={add} className="input-button">Add</button>
      </div>
      <div className="show">
        {
          todoData.map((item,i)=>{
            return(
              <Card todoItem = {item} i={i}/>
            )
          })
        }
      </div>
    </div>
  );

  function Card({todoItem,i}){
    return(
      <>
        <div className="displayedData">{todoItem.name}</div>
        <div className="displayedData">{todoItem.dueDate}</div>
        <button onclick="edit(${i})" className="editButton">Edit</button>
        <button onClick={() => deleteItem(i)} className="deleteButton">Delete</button>
      </>
    )
  }
  
  function add(){
    const name = document.querySelector('.input-area').value;
    const dueDate= document.querySelector('.input-date').value;
    if(name !== ""){
      if(!todoData.some(item => item.name === name)){
        setTodoData([...todoData, { name: name, dueDate: dueDate }]);
        toast.success('added')
      } 
      else{
        toast.warn('same data');
      }
    }
    else{
      toast.error('data empty');
    }
  }

  function deleteItem(index) {
    setTodoData(todoData.filter((_, i) => i !== index));
    toast.info('deleted')
  }
}

export default App;
