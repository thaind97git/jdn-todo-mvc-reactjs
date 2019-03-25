import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

TodoList.defaultProps = {
    todoItemsFilter: []
}

TodoList.propTypes = {
    todoItemsFilter: PropTypes.array,
    onItemClicked: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
};

export default TodoList;