import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import UserDetails from "./UserDetails";
  import Declaration from "./Declaration";
  import Documents from "./Documents";
  import Portfolio from './Portfolio';
  import Beneficiary from './Beneficiary';
  import MultiCheckbox from './MultiCheckbox';
  import libertyLogo from "./assets/logos/libertyLogo.jpeg";
 
class Main extends Component {

    state = {
        step: 1,
        fullName: '',
        phone: '',
        email: ''
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

  render() {

    const { step } = this.state;
    const { fullName, phone, email } = this.state;
    const values = { fullName, phone, email };

    return (
        <HashRouter>
            <div>
                <img src={libertyLogo} width="200px" alt="logo" />
                <ul className="header">
                    <li><NavLink exact to="/">UserDetails</NavLink></li>
                    <li><NavLink to="/declaration">Declaration</NavLink></li>
                    <li><NavLink to="/documents">Documents</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/beneficiary">Beneficiary</NavLink></li>
                    <li><NavLink to="/multiCheckbox">MultiCheckbox</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={() => <UserDetails handleChange = {this.handleChange} values = { values } />} />
                    <Route path="/declaration" component={() => <Declaration handleChange = {this.handleChange} values = { values } />} />
                    <Route path="/documents" component={() => <Documents handleChange = {this.handleChange} values = { values } />} />
                    <Route path="/portfolio" component={() => <Portfolio handleChange = {this.handleChange} values = { values } />} />
                    <Route path="/beneficiary" component={() => <Beneficiary handleChange = {this.handleChange} values = { values } />} />
                    <Route path="/multiCheckbox" component={() => <MultiCheckbox handleChange = {this.handleChange} values = { values } />} />
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;