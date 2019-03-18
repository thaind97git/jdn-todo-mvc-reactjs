import React, { Component } from 'react';
import './TodoItems.css';
import CheckImgComplete from '../image/check.svg';
import CheckImg from '../image/check-complete.svg';
import CancelImg from '../image/cancel.svg';
var classNames = require('classnames');
class TodoItems extends Component {
    render() {
        const { item, onClick, onClickCancel } = this.props;
        let checkComplete = item.isComplete ? CheckImg : CheckImgComplete;
        return (
            <div className={classNames('TodoItems', { 'TodoItems-complete': item.isComplete })}>
                <img className="check-img" onClick={onClick} alt="" src={checkComplete} width={32} height={32}/>
                <p>{ item.title }</p>
                <img className="cancel-img" onClick={onClickCancel} alt="" src={CancelImg} width={15} height={15}/>
            </div>
        );
    }
}

export default TodoItems;