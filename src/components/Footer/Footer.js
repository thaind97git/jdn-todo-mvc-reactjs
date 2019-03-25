import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Footer.css'

class Footer extends Component {
    render() {
        const { totalItem, onGetStatus, appState, onClearCompleted } = this.props;
        const isDisplayClear = appState.todoItems.some(x => x.isComplete);
        return (
            <div id="Footer">
                <div id="number">
                    {totalItem} items left
                </div>
                <div id="status">
                    {
                        appState.statusEnums.map((item, index) => 
                            <p className={classNames("",{"active": appState.defaultStatus === item.status})} onClick={onGetStatus(item.status)} 
                                key={item.status}>{item.title} </p>)
                    }
                </div>
                { isDisplayClear && <div onClick={ onClearCompleted } id="clear">Clear Completed</div> }
            </div>
        );
    }
}

Footer.defaultProps = {
    totalItem: 0
}

Footer.propTypes = {
    totalItem: PropTypes.number,
    onGetStatus: PropTypes.func.isRequired,
    appState: PropTypes.shape({
        defaultStatus: PropTypes.number,
        statusEnums: PropTypes.array
    })
}

export default Footer;