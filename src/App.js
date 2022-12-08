import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>{todo.isCompleted ? "uncompleted" : "completed"}</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
       <button style={{marginLeft : "94px", padding : "0 29px"}} onClick={(e) => handleSubmit(e)}>submit</button>
    </form>
  );
}
function App() {
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted ;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const [todos, setTodos] = React.useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
  ]);
  
  return (
    <div className="app">
      <h1 className="heading">Todo App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return <Todo todo={todo} index={index} key={index} completeTodo = {completeTodo} removeTodo = {removeTodo} />;
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
