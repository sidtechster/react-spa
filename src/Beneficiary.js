import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Beneficiary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            city: '',
            percentage: '',
            list: []
        };
    }

    addItem = e => {
        e.preventDefault();        
        this.setState({                            
            list: this.state.list.concat({id: this.state.id, city: this.state.city, percentage: this.state.percentage}),            
            id: '',
            city: '',
            percentage: ''     
        });
    }

    delItem = i => {
        this.setState(state => {
            const list = state.list.filter((item, j) => i !== j);        
            return {
                list,
            };
        });
    }

    save = e => {
        e.preventDefault();
        var total = Number(this._total());
        if (total > 100) {
            console.log("ERROR")
        } else {
        console.log(total) }
    }

    handleChange = input => e => {
        var data = this.state.list;
        this.setState({
            [input]: e.target.value
        });
    }

    _total = () => {
        var a = 0;  
        var data = this.state.list;
        data.forEach(i => {
            a += Number(i.percentage);
        });

        return a;        
    }          

    render() {

        return(
            <div>
                Beneficiary
                
                <table id="customers">                         
                    {this.state.list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.city}</td>
                            <td>{item.percentage}</td>
                            <td><button type="button" onClick={() => this.delItem(index) }>-</button></td>
                        </tr>
                    ))}
                </table>
                <input type="text" value={this.state.id} onChange={this.handleChange('id')}></input>
                <input type="text" value={this.state.city} onChange={this.handleChange('city')}></input>
                <input type="text" value={this.state.percentage} onChange={this.handleChange('percentage')}></input>
                <button type="button" onClick={ this.addItem }>+</button>
                <br />
                TOTAL: { this._total() }
                <br />
                <button type="button" onClick={ this.save }>Save</button>
            </div>
        );
    }
}

export default withRouter(Beneficiary);