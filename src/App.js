import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import LocalStorageService from './Service/localStorageService';

import classNames from 'classnames';

const key = 'jdn-todo-mvc-reactjs';
class App extends Component {
    constructor() {
        super();
        let todoLocalStorage = LocalStorageService.getItem(key) ? LocalStorageService.getItem(key) : [];
        this.state = {
            'todoItems': todoLocalStorage,
            'statusEnums': [
                { title: 'All', status: 1 },
                { title: 'Active', status: 2 },
                { title: 'Complete', status: 3 }
            ],
            'defaultStatus': 1
        }
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClickAll = this.onClickAll.bind(this);
        this.onGetStatus = this.onGetStatus.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.onClearCompleted = this.onClearCompleted.bind(this);
    }



    onItemClicked(item) {
        return () => {
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

    onClickCancel(item) {
        return () => {
            const { todoItems } = this.state;
            const newTodoItems = [...todoItems]; 
            newTodoItems.splice(todoItems.indexOf(item), 1)
            this.setState({
                todoItems: newTodoItems
            }, function() {
                LocalStorageService.setItem(key, this.state.todoItems);
            })
        }
    }

    onGetStatus(status) {
        return () => {
            this.setState({
                defaultStatus: status
            })
        }
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

    onClearCompleted() {
        this.setState({
            todoItems: this.state.todoItems.filter(q => q.isComplete === false )
        }, function() {
            LocalStorageService().setItem(key, this.state.todoItems)
        })
    }

    render() {
        const { defaultStatus, todoItems } = this.state;
        let todoItemsFilter = this.onToDoItemsFilter(defaultStatus);
        return (
            <div className="App">
                <h1 id="App-title">Todos MVC</h1>
                <div id="App-main">
                    <div id="App-header">
                        <Header onClickAll={this.onClickAll} onKeyUp={this.onKeyUp} todoItemsFilter={todoItemsFilter}/>
                    </div>
                    <div id="App-body">
                        <TodoList todoItemsFilter= { todoItemsFilter } onItemClicked={ this.onItemClicked } onClickCancel={ this.onClickCancel }/>
                    </div>
                    <div id="App-footer" className={classNames("",{"display-none": todoItems.length === 0})}>
                        <Footer totalItem={ todoItemsFilter.length } onGetStatus={ this.onGetStatus } 
                            appState={ this.state } onClearCompleted= { this.onClearCompleted }/>
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    todoItems: []
}

App.propTypes = {
    defaultStatus: PropTypes.number,
    todoItems: PropTypes.array
}

export default App;
