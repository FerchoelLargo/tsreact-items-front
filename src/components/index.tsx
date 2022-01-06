import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, } from "reactstrap";


type AppProps = {};
const Index = ({ }: AppProps) => {
  return (
    <div>
      <Navbar
         color="dark"
         dark
         expand
      >
        <NavbarBrand href="/">
          App
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav className="me-auto" navbar >
            <UncontrolledDropdown inNavbar nav >
              <DropdownToggle caret nav >
                Items
              </DropdownToggle>
              <DropdownMenu end>
                
                <Link to="items" className="nounderline" >
                  <DropdownItem> All </DropdownItem>
                </Link>

                <Link to="items/details?sys_id=-1" className="nounderline" >
                  <DropdownItem> New </DropdownItem>
                </Link>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Login
          </NavbarText>
        </Collapse>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default Index;