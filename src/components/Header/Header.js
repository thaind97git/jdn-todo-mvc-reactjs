import React, {Component} from 'react';
import './Header.css'

import TickImg from '../../image/tick.svg';
class Header extends Component {
    render() {
        const { onClickAll, onKeyUp } = this.props;
        return (
            <div id="App-header">
                <img alt="" onClick={onClickAll} src={TickImg} width={20} height={20} />
                <input placeholder="What needs to be done ?" type="text" onKeyUp={onKeyUp} />
            </div>
        )
    }
}

export default Header