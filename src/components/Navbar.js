import React from 'react'
import { useState } from 'react'
import { MdFingerprint } from 'react-icons/md';
import { Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Navi() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">
          <MdFingerprint className='navbar-icon' />
              LAVISH
       </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar navbar-expand-xs >
            <NavItem>
              <NavLink href="/Home/" >  Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Services/" >Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Products/" >Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Sign up/">
                <Button outline color="primary" > Sign up</Button>{' '}
              </NavLink>
            </NavItem>
          </Nav>
          <div />
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navi








