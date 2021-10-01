import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './button-toolbar.css'
import BottomContent from './bottom-content'
import { Container, Row, Col } from 'react-bootstrap'
//
// function importAll(r) {
//     return r.keys().map(r);
// }
// const images = importAll(require.context('../icons/48px/', false, /\.(png|jpe?g|svg)$/));

const ButtonToolbar = () => {
    // const menuList = ["File", "Edit", "Formatting", "Tree", "Search", "View", "Bookmarks", "Import", "Export", "Help"]

    const [state, setState] = useState({})
    const [count, setCount] = useState(0)

    function handleClick(e) {
        // e.preventDefault();
        setState({
            ...state,
            node_add_clicked: true,
        })
        console.log('The link was clicked.')
    }

    function onClickHandler(event) {
        setCount((count) => count + 1)
    }

    return (
        <div className="py-1 px-1 btn-toolbar-div">
            <Container fluid>
                <Row style={{ justifyContent: 'right' }}>
                    <Button
                        variant="primary"
                        id="btn_node_add"
                        onClick={handleClick}
                    >
                        Add Node
                    </Button>
                    <Button class="mr-2" variant="secondary">
                        Add Subnode
                    </Button>
                    <Button variant="danger">Delete Node</Button>
                    <Button variant="primary">
                        <i class="far fa-save"></i>
                    </Button>
                    <Button variant="primary">
                        <i class="far fa-edit"></i>
                    </Button>
                </Row>
            </Container>

            <div className={'container-fluid'} style={{ marginTop: '2px' }}>
                <BottomContent state={state} />
            </div>
        </div>
    )
}

export default ButtonToolbar
