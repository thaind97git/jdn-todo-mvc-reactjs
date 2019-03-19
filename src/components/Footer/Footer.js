import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        const { totalItem, statusEnums, onClickFilter } = this.props;
        return (
            <div id="Footer">
                <div id="number">
                    {totalItem} items left
                </div>
                <div id="status">
                    {
                        statusEnums.map((item, index) => <p className="active" onClick={onClickFilter(item.status)} key={item.status}>{item.title}</p>)
                    }
                </div>
            </div>
        );
    }
}

export default Footer;