import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import portfolios from './data/portfolio.json';
import Fund from './Fund';

export class Portfolio extends Component {

    

    

    portfolioFunds = funds => funds.map((fund) => {
        return (            
            <Fund fundName={fund.name} fundFee={fund.fee} />            
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