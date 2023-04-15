import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  // State Array  // we will assign the states in input
  const [allTodos, setTodos] = useState([]);
  // new title state
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  //  1 array completed array state
  const [completedTodos, setCompletedTodos] = useState([]);


  // Arro function / object
  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    };

    // updatedTodoArr this type of storages called update a array not object if we direct uploded then we work on that object to object
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  };


  // Delete Functionality
  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  };

  // checkbox Functions
  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    }
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

  // handle delete todo
const handleDeleteCompletedTodo =(index)=>{
  let reducedTodo = [...completedTodos];
  reducedTodo.splice(index);
  localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
  setCompletedTodos(reducedTodo);
};

  // for page rendering then checking a some items in local storage haven't or not use a useffect
  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, [])

  return (
    <div className="App">
      {/* font link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@500;600;700&family=Caveat:wght@500&family=Didact+Gothic&family=PT+Sans+Narrow&family=Rajdhani:wght@500&display=swap" rel="stylesheet" />

      {/* check UI link */}
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css' />
      {/* trash UI link */}
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>

      {/* Heading */}
      <h1>To-Do App</h1>

      {/* FOR ALL Input */}
      <div className="todo-wrapper">
        <div className='todo-input'>

          {/* Need Icon | For Label & Inputs */}
          <div className='todo-input-item'>
            <label> Title </label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What's The Task?" />
          </div>

          <div className='todo-input-item'>
            <label> Description </label>
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What's The Description?" />
          </div>

          {/* Buttons */}
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primarybtn'>Add</button>
          </div>
        </div>

        {/* Showing Buttons */}
        <div className='btn-area'>
          <button className={`seconderyBtn ${isCompleteScreen === false && 'active'} `} onClick={() => setIsCompleteScreen(false)} >Todo</button>
          <button className={`seconderyBtn1 ${isCompleteScreen === true && 'active'} `} onClick={() => setIsCompleteScreen(true)} >Completed</button>
        </div>

        {/*  List */}
        <div className='todo-list'>

          {isCompleteScreen === false && allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                {/* Icons */}
                <div>
                  <i class="fi fi-rs-trash" onClick={() => handleDeleteTodo(index)} id='trash-icon' ></i>
                  <i class="fi fi-rr-check" onClick={() => handleComplete(index)} id='check-icon'></i>
                </div>
              </div>
            );
          })}

          {/* Second List */}
          {isCompleteScreen === true && completedTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p><small>Completed On: {item.completedOn}</small></p>
                </div>
                {/* Icons */}
                <div>
                  <i class="fi fi-rs-trash" onClick={() => handleDeleteCompletedTodo(index)} id='trash-icon'></i>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );

}

export default App;
