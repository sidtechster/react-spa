import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MultiCheckbox extends Component { 
    constructor(props) {
        super(props);
        this.state = {            
            list: [],
            fund_1: false,
            fund_2: false,
            fund_3: false
        };
    }

    handleCheck = input => e => {      
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
            [input]: value,
            list: this.state.list(this.state.fund_1, this.state.fund_2, this.state.fund_3)
        });
    }

    render() {
        return(
            <div>
                <h1>FUND</h1>
                <p>
                    <input type="checkbox" checked={this.state.fund_1} onChange={this.handleCheck('fund_1')} value="fund_1" />Fund #1
                </p>
                <p>
                    <input type="checkbox" checked={this.state.fund_2} onChange={this.handleCheck('fund_2')} value="fund_2" />Fund #2
                </p>
                <p>
                    <input type="checkbox" checked={this.state.fund_3} onChange={this.handleCheck('fund_3')} value="fund_3" />Fund #3
                </p>
            </div>
        )
    }
}

export default withRouter(MultiCheckbox);