import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './top-taskbar.css'

const TopTaskbar = () => {
    const menuList = [
        'File',
        'Edit',
        'Formatting',
        'Tree',
        'Search',
        'View',
        'Bookmarks',
        'Import',
        'Export',
        'Help',
    ]
    return (
        <Navbar
            className="py-0"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="py-0">
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="py-0" href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                    </NavDropdown>
                    {menuList.map((value, idx) => {
                        return (
                            <NavDropdown title={value} id={idx}>
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                            </NavDropdown>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopTaskbar
