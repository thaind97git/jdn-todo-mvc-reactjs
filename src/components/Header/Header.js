import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Header.css'
import TickImg from '../../images/tick.svg';

import { TodoItemContext } from '../Contexts/TodoItem.context';

class Header extends Component {
    render() {
        return (
            <TodoItemContext.Consumer>
                {({ todoItemsFilter, onClickAll, onKeyUp }) => (
                    <div id="header">
                        <img 
                            title="check all" 
                            className={classNames("",{ "isOpacity": () => todoItemsFilter.some(x => !x.isComplete)} )} 
                            alt="" 
                            onClick={() => onClickAll()} 
                            src={TickImg} 
                            width={20} height={20} 
                        />
                        <input 
                            placeholder="What needs to be done ?" 
                            type="text" 
                            onKeyUp={(event) => onKeyUp(event)} 
                        />
                    </div>
                )}
            </TodoItemContext.Consumer>
        )
    }
}

Header.propTypes = {
    onClickAll: PropTypes.func,
    onKeyUp: PropTypes.func,
    todoItemsFilter: PropTypes.array
};

export default Header