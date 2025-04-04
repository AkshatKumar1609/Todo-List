import { useState } from 'react';
import './App.css';
import { toast, ToastContainer, Zoom } from 'react-toastify';

function App() {
  let [todoData,setTodoData] = useState([]);
  let [strikeStatus,setStrikeStatus] = useState([]);
  return (
    <div tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') add();}}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="colored"
      transition={Zoom}
    />
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
        <div onClick = {()=>strike(i)} className={`displayedData ${(strikeStatus[i]?'strike':'')}`}>{todoItem.name}</div>
        <div onClick = {()=>strike(i)} className={`displayedData ${(strikeStatus[i]?'strike':'')}`}>{todoItem.dueDate}</div>
        <button onClick={()=>edit(i)} className="editButton">Edit</button>
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
        setStrikeStatus([...strikeStatus,false]);
        toast.success('added')
      } 
      else{
        toast.warn('same data');
      }
    }
    else{
      toast.error('data empty');
    }
    document.querySelector('.input-area').value = '';
    document.querySelector('.input-date').value = '';
    document.querySelector('.input-button').innerText = 'Add';
  }

  function deleteItem(index) {
    setTodoData(todoData.filter((_, i) => i !== index));
    setStrikeStatus(strikeStatus.filter((_, i) => i !== index));
    toast.info('deleted');
  }

  function edit(index){
    let oldData = todoData[index].name;
    let oldDate = todoData[index].dueDate;
    setTodoData(todoData.filter((_, i) => i !== index));
    document.querySelector('.input-button').innerText = 'Edit';
    document.querySelector('.input-area').value = oldData;
    document.querySelector('.input-date').value = oldDate;
  }

  function strike(i) {
    const updatedStrikeStatus = [...strikeStatus];
    updatedStrikeStatus[i] = !updatedStrikeStatus[i];
    setStrikeStatus(updatedStrikeStatus);
  }
}

export default App;
