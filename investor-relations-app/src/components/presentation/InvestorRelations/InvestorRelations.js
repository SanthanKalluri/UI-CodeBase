import React, { Component } from 'react';
import background from '../../../images/stream.png'
import './InvestorRelations.css'
import {Button,Glyphicon} from 'react-bootstrap';

class InvestorRelations extends Component {
    render() {
        let screenWidth = window.screen.width - 100;
        let screenHeight = window.screen.height-200;
        console.log(screenWidth + '::::' + screenHeight)
        return (
            <div>
            <div className='investorContentConainer'   style={{width:screenWidth, height:screenHeight}}>

            </div>
            <div className='investorContent'>
                <h2>Reactive FY18 Q2 Earnings</h2>
                <h3>Jan 31,2018</h3>
                <br/>
                <Button style={{color:'white',background:'black',padding:10+'px' }}>See Details  &nbsp;&nbsp;&nbsp;<Glyphicon glyph="menu-right" /></Button>
            </div>
            </div>
        );
    }
}

export default InvestorRelations;