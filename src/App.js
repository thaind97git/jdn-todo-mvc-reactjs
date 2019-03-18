import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/Todoitems';
import Footer from './components/Footer/Footer';
import TickImg from './image/tick.svg';
class App extends Component {
    constructor() {
        super();
        this.state = {
            'todoItems': [
                { title: 'Item 01', isComplete: true },
                { title: 'Item 02', isComplete: true },
                { title: 'Item 03', isComplete: false }
            ]
        }

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClickAll = this.onClickAll.bind(this);
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
                    todoItems: [{ title: text, isComplete: false }, ...todoItems]
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
        })
    }

    onClickCancel(item) {
        return () => {
            const { todoItems } = this.state;
            const newTodoItems = [...todoItems]; 
            newTodoItems.splice(todoItems.indexOf(item), 1)
            this.setState({
                todoItems: newTodoItems
            })
        }
    }

    render() {
        return (
            <div className="App">
                <h1 id="title">Todos MVC</h1>
                <div id="App-main">
                    <div id="App-header">
                        <img alt="" onClick={this.onClickAll} src={TickImg} width={20} height={20} />
                        <input placeholder="What needs to be done ?" type="text" onKeyUp={this.onKeyUp} />
                    </div>
                    <div id="App-body">
                        {
                            this.state.todoItems.map((item, index) =>
                                <TodoItems
                                    key={index}
                                    item={item}
                                    onClick={this.onItemClicked(item)}
                                    onClickCancel={this.onClickCancel(item)}/>)
                        }
                    </div>
                    <div id="App-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;