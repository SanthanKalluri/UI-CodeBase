import React, { Component } from 'react';
import './App.css';
import logo from './images/microsoftLogo.png';

import AppBar from './components/presentation/AppBar/AppBar';
import ContentArea from './components/presentation/ContentArea';
import InvestorRelations from './components/presentation/InvestorRelations/InvestorRelations';
import IncomeStatement from './components/presentation/FinancialStatements/IncomeStatement';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contentComponent : <InvestorRelations/>
    }

    this.handleMenuItemClick= this.handleMenuItemClick.bind(this)
  }

  handleMenuItemClick(newComponent){
    this.setState({
      contentComponent : newComponent
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{marginLeft:20+'px'}}>
          <AppBar handleMenuItemClick={this.handleMenuItemClick}/>
        </div>
        <div>
          <ContentArea>{this.state.contentComponent}</ContentArea>
        </div>
        <div className='footerDiv'>
          <hr/>
          <span><a href='#'>Contact Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#'>Terms of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; Microsoft</span>
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
