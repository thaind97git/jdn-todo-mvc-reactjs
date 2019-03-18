import React, { Component } from 'react';
import './TrafficLight.css';
var classNames = require('classnames');

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    

    render () {
        const { currentColor } = this.props
        return (
            <div className="TrafficLight">
                <div className={classNames('buld', 'red', { 'active': currentColor === RED })}></div>
                <div className={classNames('buld', 'yellow', { 'active': currentColor === YELLOW })}></div>
                <div className={classNames('buld', 'green', { 'active': currentColor === GREEN })}></div>
            </div>
        );
    }
}

export default TrafficLight