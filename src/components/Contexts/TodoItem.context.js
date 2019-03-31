import React, { Component } from 'react';
import LocalStorageService from '../../Service/localStorageService';

export const TodoItemContext = React.createContext();

const key = 'jdn-todo-mvc-reactjs';
export class TodoItemProvider extends Component {

    constructor(props) {
        super(props);
        let todoLocalStorage = LocalStorageService.getItem(key) ? LocalStorageService.getItem(key) : [];
        this.state = {
            todoItems: todoLocalStorage,
            statusEnums: [
                { title: 'All', status: 1 },
                { title: 'Active', status: 2 },
                { title: 'Complete', status: 3 }
            ],
            defaultStatus: 1
        }

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClickAll = this.onClickAll.bind(this);
        this.onGetStatus = this.onGetStatus.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.onClearCompleted = this.onClearCompleted.bind(this);
        this.onToDoItemsFilter = this.onToDoItemsFilter.bind(this);
    }

    onItemClicked(item) {
        const isComplete = item.isComplete;
        const { todoItems } = this.state;
        const index = todoItems.indexOf(item);
        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                {
                    ...item,
                    isComplete: !isComplete
                },
                ...todoItems.slice(index + 1)
            ]
        }, function() {
            LocalStorageService.setItem(key, this.state.todoItems);
        })
    }

    onKeyUp(event) {
        if (event.keyCode === 13) {
            const { todoItems } = this.state;
            let text = event.target.value.trim();
            if (!text || text === '') {
                return;
            } else {
                this.setState({
                    todoItems: [...todoItems, { title: text, isComplete: false }]
                }, function() {
                    LocalStorageService.setItem(key, this.state.todoItems);
                });
                event.target.value = '';
            }
        }
    }

    onGetStatus(status) {
        this.setState({
            defaultStatus: status
        })
    }

    onClearCompleted() {
        this.setState({
            todoItems: this.state.todoItems.filter(q => q.isComplete === false )
        }, function() {
            LocalStorageService.setItem(key, this.state.todoItems)
        })
    }

    onClickAll() {
        const { todoItems } = this.state;
        const isAllComplete = todoItems.every(t => t.isComplete);
        const newTodoItems = [...todoItems];
        newTodoItems.forEach(e => e.isComplete = !isAllComplete);
        this.setState({
            todoItems: newTodoItems
        }, function() {
            LocalStorageService.setItem(key, this.state.todoItems);
        })
    }

    onToDoItemsFilter(status) {
        const { todoItems } = this.state;
        switch (status) {
            case 1:
                return [...todoItems]
            case 2:
                return [...todoItems].filter(q => q.isComplete === false);
            case 3:
                return [...todoItems].filter(q => q.isComplete === true);
            default:
                return [...todoItems]
        }
    }

    onClickCancel(item) {
            const { todoItems } = this.state;
            const newTodoItems = [...todoItems]; 
            newTodoItems.splice(todoItems.indexOf(item), 1)
            this.setState({
                todoItems: newTodoItems
            }, function() {
                LocalStorageService.setItem(key, this.state.todoItems);
            })
    }

    render() {
        return (
            <TodoItemContext.Provider value={{
                todoItems: this.state.todoItems,
                statusEnums: this.state.statusEnums,
                defaultStatus: this.state.defaultStatus,
                onItemClicked: this.onItemClicked,
                onGetStatus: this.onGetStatus,
                onClearCompleted: this.onClearCompleted,
                onClickAll: this.onClickAll,
                todoItemsFilter: this.onToDoItemsFilter,
                onKeyUp: this.onKeyUp,
                onClickCancel: this.onClickCancel
            }}>
                { this.props.children }
            </TodoItemContext.Provider>
        );
    }
}