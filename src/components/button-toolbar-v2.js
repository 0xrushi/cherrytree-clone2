import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './button-toolbar.css'
import BottomContent from './bottom-content'
import { Container, Row, Col } from 'react-bootstrap'

const ButtonToolbar = () => {
    const [state, setState] = useState({})
    const [count, setCount] = useState(0)

    function handleNodeAddClick(e) {
        setState({
            ...state,
            node_add_clicked: true,
        })
        console.log('The handleNodeAddClick was clicked.')
    }
    function handleSubNodeAddClick(e) {
        setState({
            ...state,
            subnode_add_clicked: true,
        })
        console.log('The handleSubNodeAddClick was clicked.')
    }

    function handleDeleteNodeClick(e) {
        setState({
            ...state,
            node_delete_clicked: true,
        })
        console.log('The handleDeleteNodeClick was clicked.')
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
                        onClick={handleNodeAddClick}
                    >
                        Add Node
                    </Button>
                    <Button className="mr-2" variant="secondary">
                        Add Subnode
                    </Button>
                    <Button variant="danger" onClick={handleDeleteNodeClick}>
                        Delete Node
                    </Button>
                    <Button variant="primary">
                        <i className="far fa-save"></i>
                    </Button>
                    <Button variant="primary">
                        <i className="far fa-edit"></i>
                    </Button>
                </Row>
            </Container>

            <div className={'container-fluid'} style={{ marginTop: '2px' }}>
                <BottomContent data={{ ...state }} />
            </div>
        </div>
    )
}

export default ButtonToolbar
