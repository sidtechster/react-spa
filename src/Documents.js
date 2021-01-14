import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Documents extends Component {

    back = e => {
        e.preventDefault();
        this.navPath('/declaration');
    }

    navPath(path) {
        this.props.history.push(path);
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <h3>Documents</h3>
                
                <fieldset>
                    <label>Email</label>
                    <input type="text" tabIndex="1" required autoFocus onChange={handleChange('email')} defaultValue={values.email} />
                </fieldset>
                <fieldset>                        
                    <button name="prev" type="submit" id="contact-submit" onClick={this.back}>Back</button>
                    <button name="next" type="submit" id="contact-submit">Submit</button>
                </fieldset>
            </div>
        )
    }
}

export default withRouter(Documents);