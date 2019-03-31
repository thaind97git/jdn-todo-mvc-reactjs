import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TodoItems.css';
import CheckImgComplete from '../../../images/check.svg';
import CheckImg from '../../../images/check-complete.svg';
import CancelImg from '../../../images/cancel.svg';

import { TodoItemContext } from '../../Contexts/TodoItem.context';

class TodoItems extends Component {
    render() {
        const { item } = this.props;
        return (
            <TodoItemContext.Consumer>
                {({ onItemClicked, onClickCancel }) => (
                    <div className={classNames('TodoItems', { 'TodoItems-complete': item.isComplete })}>
                        <img 
                            className={classNames("check-img", {"isOpacity": !item.isComplete})} 
                            onClick={() => onItemClicked(item)} 
                            alt="" 
                            src={item.isComplete ? CheckImg : CheckImgComplete} 
                            width={32} height={32}
                        />
                        <p>{ item.title }</p>
                        <img 
                            className="cancel-img" 
                            onClick={() => onClickCancel()} 
                            alt="" 
                            src={CancelImg} 
                            width={15} height={15}
                        />
                    </div>
                )}
            </TodoItemContext.Consumer>
        );
    }
}

TodoItems.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string
    }).isRequired,
    onItemClicked: PropTypes.func,
    onClickCancel: PropTypes.func
}

export default TodoItems;