import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/input-todo/TodoInput';
import TodoList from './components/list-todo/TodoList';
function App() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <TodoInput/>
        </div>
        <div class="row">
          <TodoList/>
          </div>
      </div>
    </section>
  );
}

export default App;
