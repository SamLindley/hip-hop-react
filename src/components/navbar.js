import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
          <div className="navbar">
              <Navbar fixed="top" color="faded" light toggleable>

                  <NavbarToggler right onClick={this.toggle} />
                  <div className="container"><Collapse isOpen={this.state.isOpen} navbar><NavbarBrand href="/">goat</NavbarBrand>

                      <Nav className="ml-auto" navbar>

                          <NavItem>
                              <NavLink href="/components/">Artists</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="https://github.com/reactstrap/reactstrap">Log In</NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse></div>


              </Navbar>
          </div>


        );
    }
}