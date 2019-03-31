import React, { Component } from 'react';
import classNames from 'classnames';

import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { TodoItemProvider, TodoItemContext } from './components/Contexts/TodoItem.context';

class App extends Component {
    render() {
        return (
            <TodoItemProvider>
                <div className="App">
                    <h1 id="App-title">Todos MVC</h1>
                    <div id="App-main">
                        <div id="App-header">
                            <Header/>
                        </div>
                        <div id="App-body">
                            <TodoList/>
                        </div>
                        <TodoItemContext.Consumer>
                            {({todoItems}) => (
                                <div 
                                    id="App-footer" 
                                    className={classNames("",{"display-none": todoItems.length === 0})}
                                >
                                    <Footer/>
                                </div>
                            )}
                        </TodoItemContext.Consumer>
                        
                    </div>
                </div>
            </TodoItemProvider>
        );
    }
}

export default App;
