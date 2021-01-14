import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


export class UserDetails extends Component {
    
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
                    <button name="next" type="submit" id="contact-submit" onClick={this.continue}>Next</button>
                    {/* <Link to='/declaration'>Declaration</Link> */}
                </fieldset>
                
            </div>
        )
    }
}

export default withRouter(UserDetails);