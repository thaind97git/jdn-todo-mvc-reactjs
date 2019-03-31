import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Footer.css'

import { TodoItemContext } from '../Contexts/TodoItem.context';

class Footer extends Component {
    render() {
        return (
            <TodoItemContext.Consumer>
                {
                    (({ todoItems, onGetStatus, statusEnums, defaultStatus, onClearCompleted }) => (
                        <div id="Footer">
                            <div id="number">
                                {todoItems.length} items left
                            </div>
                            <div id="status">
                                {
                                    statusEnums.map((item, index) => 
                                        <p className={classNames("",{"active": defaultStatus === item.status})} 
                                            onClick={() => onGetStatus(item.status)} 
                                            key={item.status}>{item.title} 
                                        </p>
                                    )
                                }
                            </div>
                            { todoItems.some(x => x.isComplete) && <div onClick={ onClearCompleted } id="clear">Clear Completed</div> }
                        </div>
                    ))
                }
            </TodoItemContext.Consumer>
        );
    }
}

Footer.defaultProps = {
    totalItem: 0
}

Footer.propTypes = {
    todoItems: PropTypes.array,
    onGetStatus: PropTypes.func,
    defaultStatus: PropTypes.number,
    statusEnums: PropTypes.array,
    onClearCompleted: PropTypes.func
}

export default Footer;