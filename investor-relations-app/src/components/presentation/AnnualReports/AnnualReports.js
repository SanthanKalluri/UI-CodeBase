import React, { Component } from 'react';
import background from '../../../images/stream.png'
import './AnnualReports.css'
import { Button,Glyphicon } from 'react-bootstrap';

class InvestorRelations extends Component {
    render() {
        let screenWidth = window.screen.width - 100;
        let screenHeight = window.screen.height - 200;
        console.log(screenWidth + '::::' + screenHeight)
        return (
            <div style={{fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif'}}>
                <h2 style={{marginLeft:40+'px'}}>Annual Reports</h2>
                <div className='reportContentConainer' style={{ width: screenWidth, height: screenHeight }}>

                </div>
                <div className='reportContent'>
                    <h2>2017 Annual Report</h2>
                    <br/>
                    <Button style={{ color: 'white', background: 'black',padding:10+'px' }}>View Online &nbsp;&nbsp;&nbsp;<Glyphicon glyph="menu-right" /></Button>
                </div>
            </div>
        );
    }
}

export default InvestorRelations;