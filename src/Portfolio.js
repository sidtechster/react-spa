import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import portfolioData from './data/portfolio.json';
// import Fund from './Fund';

export class Portfolio extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            fundNames: [],
            fee: null,
            list: [],
            fundName: null,
            allocation: null,
            fundType: null
        }
    }

    fundTypes = portfolioData.map((fundType, key) => {
        return (
            <option key={key} value={fundType.portfolioName}>{fundType.portfolioName}</option>
        )
    });

    handleFundType = e => {
        var value = e.target.value;
        console.log('Selected fund type:', value);
        var allFunds = portfolioData.filter(f => f.portfolioName === value)[0];
        console.log('allFunds: ', allFunds.funds.length);

        this.setState({
            fundNames: allFunds.funds,
            fee: null,
            fundType: value
        })

    }

    handleFundName = e => {
        var value = e.target.value;
        var f = this.state.fundNames.filter(n => n.name === value)[0];
        console.log(f.fee);
        this.setState({
            fee: f.fee,
            fundName: value
        })
    }

    addItem = e => {
        e.preventDefault();
        this.setState({
            list: this.state.list.concat({
                fundName: this.state.fundName,
                fundType: this.state.fundType,
                fee: this.state.fee,
                allocation: this.state.allocation
            })
        })
    }

    delItem = i => {
        this.setState(state => {
            const list = state.list.filter((item, j) => i !== j);        
            return {
                list,
            };
        });
    }
    

    // portfolioFunds = funds => funds.map((fund) => {
    //     return (            
    //         <Fund fundName={fund.name} fundFee={fund.fee} />            
    //     )
    // });

    // portfolioList = portfolios.map((portfolio) => {
    //     return (
            
    //         <div style={{border:"1px solid lightgrey"}}>
    //             <div style={{backgroundColor: "lightgray", padding: "5px"}} key={portfolio.portfolioName}>{portfolio.portfolioName}</div>
    //             <table style={{marginLeft:"5px"}}>
    //                 {this.portfolioFunds(portfolio.funds)}
    //             </table>                
    //         </div>
    //     )
    // });

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <th>Fund Type</th>
                        <th>Fund Name</th>
                        <th>Fund Fees</th>
                        <th>Allocation</th>
                        <th></th>
                    </thead>
                    {this.state.list.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.fundType}</td>
                                    <td>{item.fundName}</td>
                                    <td>{item.fee}</td>
                                    <td>{item.allocation}</td>
                                    <td><button type="button" onClick={() => this.delItem(index) }>&#10006;</button></td>
                                </tr>
                            ))}
                    <tr>
                        <td>
                            <select onChange={this.handleFundType}>
                                <option>-- Select --</option>
                                {this.fundTypes}
                            </select>
                        </td>
                        <td>
                            <select onChange={this.handleFundName}>
                                <option>-- Select --</option>
                                {this.state.fundNames.map((fundName, key) => {
                                    return <option key={key} value={fundName.name}>{fundName.name}</option>
                                })}
                            </select>
                        </td>
                        <td>
                            
                                {this.state.fee}
                            
                        </td>
                        <td>
                            <input type="text" onChange={(e) => this.setState({allocation: e.target.value})}></input>
                        </td>
                        <td>
                            <button type="button" onClick={this.addItem}>&#10010;</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default withRouter(Portfolio);