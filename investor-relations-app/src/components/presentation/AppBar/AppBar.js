import React, { Component } from 'react';
import { Grid, Col, Row, ButtonToolbar, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import './AppBar.css'
import InvestorRelations from './../InvestorRelations/InvestorRelations';
import IncomeStatement from './../FinancialStatements/IncomeStatement';
import BalanceSheet from './../FinancialStatements/BalanceSheet';
import CashFlowStatement from './../FinancialStatements/CashFlowStatement';
import AnnualReports from './../AnnualReports/AnnualReports';

class AppBar extends Component {
    render() {
        return (
            <Grid fluid={true} className="App-title">
                <Row>
                    <Col lg={2}>
                        <ButtonToolbar>
                            <Button href="#" className='appBarButton' onClick={() => this.props.handleMenuItemClick(<InvestorRelations/>)}>Investor Relations</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col lg={2}>
                        <ButtonToolbar>
                            <DropdownButton
                                title="Financial Statements"
                                id="dropdown-size-extra-small" className='appBarButton'>
                                <MenuItem eventKey="1" onClick={() => this.props.handleMenuItemClick(<IncomeStatement/>)}>Income Statement</MenuItem>
                                <MenuItem eventKey="2" onClick={() => this.props.handleMenuItemClick(<BalanceSheet/>)}>Balance Sheet</MenuItem>
                                <MenuItem eventKey="2" onClick={() => this.props.handleMenuItemClick(<CashFlowStatement/>)}>Cash Flow Statement</MenuItem>
                            </DropdownButton>
                        </ButtonToolbar>
                    </Col>
                    <Col lg={2}>
                    <ButtonToolbar>
                            <Button href="#" className='appBarButton' onClick={() => this.props.handleMenuItemClick(<AnnualReports/>)}>Annual Reports</Button>
                    </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AppBar;  