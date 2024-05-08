import './App.css'
import {useState} from 'react';

function App(){

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
      setTodoList(todoList.filter((task) => task.id !== id));
    };

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <div className='addTask'>
        
        
      <h1>Enter your daily Tasks:</h1><br />
        <input onChange={handleChange} placeholder='Add your task'/>
        <button onClick={addTask}>Add</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
          <div className='task'>
            <h2>{task.taskName}</h2>
            <button onClick={() => deleteTask(task.id)}> Remove </button>
            </div>
          );
        })}

      </div>
    </div>
  );
};
export default App;
