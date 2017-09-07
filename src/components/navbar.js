import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import LoginButton from './log_in_button';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogIn = this.handleLogIn.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogIn() {
        console.log("clicked");
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        return (
            <div>
                <Navbar fixed="top" color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle}/>
                    <NavbarBrand href="/">goat</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink id="loginButton" onClick={this.handleLogIn}>{this.state.isLoggedIn? "Log OUT" : "LOG IN"}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>


        );
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    };
}