import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@500;600;700&family=Caveat:wght@500&family=Didact+Gothic&family=PT+Sans+Narrow&family=Rajdhani:wght@500&display=swap" rel="stylesheet" />
      
      {/* Heading */}
      <h1>To-Do App</h1>

      {/* FOR ALL Input */}
      <div className="todo-wrapper">
      <div className='todo-input'>

          {/* Need Icon | For Label & Inputs */}
          <div className='todo-input-item'>
            <label> Title </label>
            <input type="text" placeholder="What's The Task?" />
          </div>

          <div className='todo-input-item'>
            <label> Description </label>
            <input type="text" placeholder="What's The Description?" />
          </div>

          {/* Buttons */}
          <div className='todo-input-item'>
            <button type='button' className='primarybtn'>Add</button>
          </div>
        </div>

        {/* Showing Buttons */}
        <div className='btn-area'>
          <button className={`seconderyBtn ${isCompleteScreen === false && 'active'} `} onClick={() => setIsCompleteScreen(false)} >Todo</button>
          <button className={`seconderyBtn1 ${isCompleteScreen === true && 'active'} `} onClick={() => setIsCompleteScreen(true)} >Completed</button>
        </div>

{/*  List */}
<div className='todo-list'>

        <div className="todo-list-item">
            <h1>Task 1</h1>
            <p>Description</p>
          </div>
        </div>

      </div>
    </div>
  );

}

export default App;
