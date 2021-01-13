import React, { Component } from 'react';
import Single from './Single.js';

class Grid extends Component {
    
    renderList = () => {
        return this.props.items.map((item, i) => (
            <Single id={ i + 1 } item={ item } />
        ));
    };

    render() {
        return (
            <div className='row'>
                <ul>{this.renderList()}</ul>
            </div>
        )
    }
};

export default Grid;