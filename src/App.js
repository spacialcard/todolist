import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoCreate from './components/TodoCreate';

const Globalstyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <Globalstyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
