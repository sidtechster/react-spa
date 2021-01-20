import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import bankCodes from './data/bank-codes.json';


export class UserDetails extends Component {
    
    state = {
        selectedBank: '-Select-',
        bankCode: '000000'
    }

    change = e => {

        const selectedIndex = e.target.options.selectedIndex;
        
        this.setState({
            selectedBank: e.target.value,
            bankCode: e.target.options[selectedIndex].getAttribute('data-key')
        })
    }

    continue = e => {
        e.preventDefault();
        if(this.props.values.fullName != '') {
            this.nextPath('/declaration');
        }
        else {
            alert('Please provide a valid name');
        }
    };

    nextPath(path) {
        this.props.history.push(path);
      }

    // banks = ['-Select-','ABSA','African Bank','Bank of Athens','Bidvest Bank'];
    banks = bankCodes.map((bank) => {
        return (
            <option key={bank.code} data-key={bank.code} value={bank.name}>{bank.name}</option>
        )
    });
    
    render() {

        
        
        const { values, handleChange } = this.props;
        return (
            <div>
                
                <h3>Member Information</h3>
                <h4>Please update below member information</h4>
                <fieldset>
                    <label>Full Name</label>
                    <input type="text" tabIndex="1" required autoFocus onChange={handleChange('fullName')} defaultValue={values.fullName} />
                </fieldset>
                <fieldset>
                    <label>Bank Name</label>
                    <select name="bankName" id="bankName" mandatory="false" onChange={this.change} value={this.state.selectedBank}>

                        { this.banks }
                        {/* { this.bankCodes.map((bank) => (
                            <option key={bank.bank} value={bank.bank}>{bank.bank}</option>
                        ))} */}
                            
                        
                        {/* <option selected="true" value="-Select-">-Select-</option>
                        <option value="ABSA">ABSA</option>
                        <option value="African Bank">African Bank</option>
                        <option value="Bank of Athens">Bank of Athens</option> */}
                    </select>
                    <p>{this.state.selectedBank}</p>
                    <p>{this.state.bankCode}</p>
                </fieldset>
                <fieldset>                        
                    <button name="next" type="submit" id="contact-submit" onClick={this.continue}>Next</button>
                    {/* <Link to='/declaration'>Declaration</Link> */}
                </fieldset>
                
            </div>
        )
    }
}

export default withRouter(UserDetails);