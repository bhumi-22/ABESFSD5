import { useState } from "react"
import InputToDo from "./Components/InputToDo"
function App() {
  const [todoList, setTodoList] = useState([]);
  const inputHandler = (task) => {
    setTodoList([...todoList, task]);
    console.log(todoList);
  }
  const deleteHandler = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(...newTodoList);
  }
  const updateHandler = (index, data) => {
    const newTodoList = [...todoList];
    const updatedTask = prompt("Update the task:", data);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      newTodoList[index] = updatedTask;
      setTodoList(newTodoList);
    }
  }
  return (
    <div className="todo-list">
      <h1>My To-Do List</h1>
      {todoList.map(
        (data, index) =>
          <li key={index}>
            {data}
            <button onClick={() => deleteHandler(index)}>DEL</button>
            <button onClick={() => updateHandler(index, data)}>UPDATE</button>
          </li>)}
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}
export default App