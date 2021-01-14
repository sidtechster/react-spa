import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Declaration extends Component {

    back = e => {
        e.preventDefault();
        this.navPath('/');
    }

    next = e => {
        e.preventDefault();
        this.navPath('/documents');
    }

    navPath(path) {
        this.props.history.push(path);
    }

    render() {

        const { values, handleChange } = this.props;

        return (
            <div>
                <h3>Declaration</h3>
                
                <fieldset>
                    <label>Phone Number</label>
                    <input type="text" tabIndex="1" required autoFocus onChange={handleChange('phone')} defaultValue={values.phone} />
                </fieldset>
                <fieldset>    
                    <button name="prev" type="submit" id="contact-submit" onClick={this.back}>Back</button>                    
                    <button name="next" type="submit" id="contact-submit" onClick={this.next}>Next</button>
                </fieldset>
            </div>
        )
    }
}

export default withRouter(Declaration);