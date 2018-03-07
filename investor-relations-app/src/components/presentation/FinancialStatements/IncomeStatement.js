import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Form, Glyphicon, Tabs, Tab, Table } from 'react-bootstrap';

import './IncomeStatement.css';
import {IncomeStatementData} from './IncomeStatementData';

class IncomeStatement extends Component {
    render() {
        return (
            <div style={{ fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif' }}>
                <Grid fluid={true} bsClass='incomeStmtFilter'>
                    <Row>
                        <Col lg={3}>
                            <h3>Browse Earnings Release</h3>
                        </Col>
                        <Col lg={3}>
                            <Form horizontal bsClass='incomeStmtFilterForm'>
                                <FormGroup controlId="formInlineName">
                                    <ControlLabel>Fiscal Year</ControlLabel>
                                    <FormControl componentClass="select" bsClass='form-control incomeStmtFilterInput'>
                                        {(
                                            function () {
                                                let options = [];
                                                for (let i = 2018; i >= 1998; i--) {
                                                    options.push(<option value={i}>{i}</option>)
                                                }
                                                return options;
                                            }
                                        )()}
                                    </FormControl>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={3}>
                            <Form horizontal bsClass='incomeStmtFilterForm'>
                                <FormGroup controlId="formInlineEmail">
                                    <ControlLabel>Quarter</ControlLabel>
                                    <FormControl componentClass="select" bsClass='form-control incomeStmtFilterInput'>
                                        {(
                                            function () {
                                                let quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
                                                let options = [];
                                                quarters.map(option => {
                                                    options.push(<option value={option}>{option}</option>)
                                                });
                                                return options;
                                            }
                                        )()}
                                    </FormControl>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={3}>
                            <Button type="submit" bsClass='btn btn-default incomeStmtFilterButton'>GO &nbsp;&nbsp;<Glyphicon glyph="menu-right" /></Button>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid={true}>
                    <Row>
                        <Col lg={12} style={{ paddingTop: '30px', paddingLeft: '20px' }}>
                            <span style={{ fontSize: 2 + 'em' }}>Earnings Release FY18 Q2</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className='incomeStmtTabs'>
                                <Tab eventKey={1} title="Table">
                                    <Grid fluid={true} className='incomeStmtTabContent'>
                                        <Row>
                                            <Col>
                                                <span style={{ fontSize: 1.5 + 'em' }}>Income Statements</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th colSpan='2'>Three Months Ended December 31.</th>
                                                        <th colSpan='2'>Six Months Ended December 31.</th>
                                                    </tr>
                                                    <tr>
                                                    <th style={{font:'inherit'}}>(In millions, except per share amounts) (Unaudited)</th>
                                                    <th>2017</th>
                                                    <th>2018</th>
                                                    <th>2017</th>
                                                    <th>2018</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                           (
                                                               function(){
                                                                   let tableData = []
                                                                   Object.keys(IncomeStatementData).map(data => {
                                                                       console.log(data);
                                                                        tableData.push(
                                                                            <tr>
                                                                                <td colSpan='5'>
                                                                                    {data}:
                                                                                 </td>
                                                                             </tr>
                                                                        )
                                                                        Object.keys(IncomeStatementData[data]).map(rows => {
                                                                            tableData.push(
                                                                                
                                                                                <tr>
                                                                                    <td>
                                                                                        {rows}
                                                                                     </td>
                                                                                     {
                                                                                         IncomeStatementData[data][rows].map(value => {
                                                                                             return (
                                                                                                 <td style={value.style}>{value.data}</td>
                                                                                             )
                                                                                         })
                                                                                     }
                                                                                 </tr>
                                                                            )                                                                            
                                                                        })
                                                                   })
                                                                   return tableData;
                                                               }
                                                           )()
                                                    }
                                                </tbody>
                                            </Table>
                                        </Row>
                                    </Grid>
                                </Tab>
                                <Tab eventKey={2} title="Power BI">
                                    Power BI
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col lg={2} className='rightContentArea'>
                            <h3>Download Earnings Related Files</h3>
                            Information contained in these documents is current as of the earnings date, and not restated for new accounting standards.
                            <ul>
                                <br/>
                                <li>Earnings Call Slides</li>
                                <br/>
                                <li>Earnings Call Transcript</li>
                                <br/>
                                <li>Financial Statements</li>
                                <br/>
                                <li>Outlook</li>
                                <br/>
                                <li>Press Release</li>
                                <br/>
                                <li>10Q</li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default IncomeStatement;