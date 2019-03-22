import React, { Component } from 'react';
import TodoItems from './TodoItems/Todoitems';
import './TodoList.css'

class TodoList extends Component {
    render() {
        const { todoItemsFilter, onItemClicked, onClickCancel } = this.props
        return (
            <div className="TodoList">
            {
                todoItemsFilter.map((item, index) => <TodoItems key={ index } item={ item }
                    onItemClicked={ onItemClicked(item) } onClickCancel={ onClickCancel(item) }/>)
            }
            </div>
        );
    }
}

export default TodoList;