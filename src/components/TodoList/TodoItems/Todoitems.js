import React, { Component } from 'react';
import './TodoItems.css';
import CheckImgComplete from '../../../images/check.svg';
import CheckImg from '../../../images/check-complete.svg';
import CancelImg from '../../../images/cancel.svg';

var classNames = require('classnames');

class TodoItems extends Component {
    render() {
        const { item, onItemClicked, onClickCancel } = this.props;
        let checkComplete = item.isComplete ? CheckImg : CheckImgComplete;
        return (
            <div className={classNames('TodoItems', { 'TodoItems-complete': item.isComplete })}>
                <img className="check-img" onClick={onItemClicked} alt="" src={checkComplete} width={32} height={32}/>
                <p>{ item.title }</p>
                <img className="cancel-img" onClick={onClickCancel} alt="" src={CancelImg} width={15} height={15}/>
            </div>
        );
    }
}

export default TodoItems;