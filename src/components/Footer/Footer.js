import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <div id="number">
                    3 items left
                </div>
                <div id="status">
                    <p className="active">All</p>
                    <p>Active</p>
                    <p>Complete</p>
                </div>
            </div>
        );
    }
}

export default Footer;