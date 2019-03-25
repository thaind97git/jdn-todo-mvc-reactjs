import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Header.css'
import TickImg from '../../images/tick.svg';
var classNames = require('classnames');

class Header extends Component {
    render() {
        const { onClickAll, onKeyUp, todoItemsFilter } = this.props;
        
        return (
            <div id="header">
                <img title="check all" className={classNames("",{ "isOpacity": todoItemsFilter.some(x => !x.isComplete)} )} 
                    alt="" onClick={onClickAll} src={TickImg} width={20} height={20} />
                <input placeholder="What needs to be done ?" type="text" onKeyUp={onKeyUp} />
            </div>
        )
    }
}

Header.propTypes = {
    onClickAll: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func.isRequired,
    todoItemsFilter: PropTypes.array
};

export default Header