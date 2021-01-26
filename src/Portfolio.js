import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import portfolios from './data/portfolio.json';

export class Portfolio extends Component {

    portfolioFunds = funds => funds.map((fund) => {
        return (
            <tr>
                <td style={{width:"400px"}} key={fund.name}>{fund.name}</td>
                <td style={{width:"100px"}} key={fund.fee}>{fund.fee}</td>
                <td style={{width:"50px"}}><input type="checkbox" /></td>
                <td><input type="text" style={{width:"50px"}} />&nbsp;%</td>
            </tr>
        )
    });

    portfolioList = portfolios.map((portfolio) => {
        return (
            
            <div style={{border:"1px solid lightgrey"}}>
                <div style={{backgroundColor: "lightgray", padding: "5px"}} key={portfolio.portfolioName}>{portfolio.portfolioName}</div>
                <table style={{marginLeft:"5px"}}>
                    {this.portfolioFunds(portfolio.funds)}
                </table>                
            </div>
        )
    });

    render() {
        return(
            <div>
                {this.portfolioList}
            </div>
        )
    }
}

export default withRouter(Portfolio);