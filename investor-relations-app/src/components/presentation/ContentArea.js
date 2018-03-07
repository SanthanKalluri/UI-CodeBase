import React, { Component } from 'react';

class ContentArea extends Component {
    render() {
        return (
            this.props.children
        );
    }
}

export default ContentArea;