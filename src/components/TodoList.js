import React from 'react';
import styled from 'styled-components';
import Todoitem from './Todoitem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return(
        <TodoListBlock>
           <Todoitem text="프로젝트 생성하기" done={true} />
           <Todoitem text="컴포넌트2" done={true} />
           <Todoitem text="컴포넌트3" done={false} />
           <Todoitem text="컴포넌트4" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;