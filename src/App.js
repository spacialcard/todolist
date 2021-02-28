import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';

const Globalstyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`

function App() {
  return (
    <TodoProvider>
      <Globalstyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
