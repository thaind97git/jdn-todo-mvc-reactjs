import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';

import TodoItems from './TodoItems/Todoitems';
import { TodoItemContext } from '../Contexts/TodoItem.context';

class TodoList extends Component {
    render() {
        return (
            <TodoItemContext.Consumer>
                {({ todoItemsFilter, onItemClicked, onClickCancel, defaultStatus }) => (
                    <div className="TodoList">
                    {
                        todoItemsFilter(defaultStatus).map((item, index) => 
                            <TodoItems 
                                key={ index } 
                                item={ item }
                                onItemClicked={() => onItemClicked(item) } 
                                onClickCancel={() => onClickCancel(item) }
                            />
                        )
                    }
                    </div>
                )}
            </TodoItemContext.Consumer>
        );
    }
}

TodoList.defaultProps = {
    todoItemsFilter: [],
    defaultStatus: 1
}

TodoList.propTypes = {
    todoItemsFilter: PropTypes.array,
    onItemClicked: PropTypes.func,
    onClickCancel: PropTypes.func,
    defaultStatus: PropTypes.number
};

export default TodoList;