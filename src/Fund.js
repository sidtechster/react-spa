import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Fund extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            fundSelected: false,
            allocation: null
        }
    }

    
    handleChange = input => e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({ [input]: value });        
    }

    render() {
        return(
            <div>
                <tr>
                    <td style={{width:"400px"}} key={this.props.fundName}>{this.props.fundName}</td>
                    <td style={{width:"100px"}} key={this.props.fundFee}>{this.props.fundFee}</td>
                    <td style={{width:"50px"}}><input type="checkbox" checked={this.state.fundSelected} onChange={this.handleChange('fundSelected')} /></td>
                    <td><input type="text" style={{width:"50px"}} value={this.state.allocation} onChange={this.handleChange('allocation')} />&nbsp;%</td>                
                </tr>
            </div>
        )
    }
}

export default Fund