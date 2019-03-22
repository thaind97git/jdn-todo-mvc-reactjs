import React, { Component } from 'react';
import classNames from 'classnames';

import './Footer.css'

class Footer extends Component {
    render() {
        const { totalItem, onGetStatus, appState } = this.props;
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
            </div>
        );
    }
}

export default Footer;