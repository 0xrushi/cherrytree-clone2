import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './bottom-content.css'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import MonacoEditor from '@uiw/react-monacoeditor'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Button } from 'react-bootstrap'
import './button-toolbar.css'

var _ = require('lodash')

const myTheme = {
    'my-theme': {
        text: '#000000',
        bg: '#e2e2e2',
        highlight: '#aaaaaa', // the colours used for selected and hover items
        decal: 'black', // the colours used  for open folder indicators and icons
        accent: '#999', // the colour used for row borders and empty file indicators
    },
}
const d = {
    id: 'root',
    name: 'Parent',
    text: '',
    children: [
        {
            id: '1',
            name: 'Child - 1',
            text: '',
        },
        {
            id: '3',
            name: 'Child - 3',
            text: 'TEXT_CH3',
            children: [
                {
                    id: '4',
                    name: 'Child - 4',
                    text: '',
                },
            ],
        },
    ],
}

const findPath = (ob, key, value) => {
    const path = []
    const keyExists = (obj) => {
        if (!obj || (typeof obj !== 'object' && !Array.isArray(obj))) {
            return false
        } else if (obj.hasOwnProperty(key) && obj[key] === value) {
            return true
        } else if (Array.isArray(obj)) {
            let parentKey = path.length ? path.pop() : ''

            for (let i = 0; i < obj.length; i++) {
                path.push(`${parentKey}[${i}]`)
                const result = keyExists(obj[i], key)
                if (result) {
                    return result
                }
                path.pop()
            }
        } else {
            for (const k in obj) {
                path.push(k)
                const result = keyExists(obj[k], key)
                if (result) {
                    return result
                }
                path.pop()
            }
        }

        return false
    }

    keyExists(ob)

    return path.join('.')
}

function handleSubNodeAddClick(e) {
    console.log('The handleSubNodeAddClick was clicked.')
}

let ii = 50

class BottomContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: d,
            pid: 0,
            selected_id: '0',
            selected_code: '',
        }
        this.handleNodeAddClick = this.handleNodeAddClick.bind(this)
        this.handleDeleteNodeClick = this.handleDeleteNodeClick.bind(this)
    }

    // Add Node Click
    handleNodeAddClick(e) {
        console.log('The handleNodeAddClick was clicked.')
        // this.state.data.children.push()
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                children: [
                    ...this.state.data.children,
                    {
                        id: ii++,
                        name: 'Child - ' + ii,
                        children: [],
                        text: '',
                    },
                ],
            },
        })
    }

    // Delete Node Click

    handleDeleteNodeClick(e) {
        console.log('The handleDeleteNodeClick was clicked.')
        let selectedPath = findPath(
            this.state.data,
            'id',
            this.state.selected_id
        )
        console.log(
            '🚀 ~ file: bottom-content.js ~ line 185 ~ BottomContent ~ render ~ selectedPath',
            selectedPath
        )
        var deepCopy = _.cloneDeep(this.state.data)
        console.log(
            '🚀 ~ file: bottom-content.js ~ line 193 ~ deepcopy BEFORE UNSET is',
            deepCopy
        )
        _.unset(deepCopy, selectedPath)
        console.log(
            '🚀 ~ file: bottom-content.js ~ line 193 ~ deepcopy AFTER UNSET is',
            deepCopy
        )

        // _.unset(deepCopy, selectedPath)

        this.setState({
            ...this.state,
            data: deepCopy,
            selected_id: 'root',
            selected_code: '',
        })
    }

    componentDidMount() {
        this.setState({ data: d, selected_id: '0' })
    }
    editorDidMount = (editor) => {
        this.editor = editor
    }

    onChange = (newValue) => {
        console.log('padat', this.props)

        let newSelectedPath = findPath(
            this.state.data,
            'id',
            this.state.selected_id
        )
        newSelectedPath =
            newSelectedPath === '' ? '' : newSelectedPath + '.text'

        this.setState({ ...this.state, selected_code: newValue })
        _.set(this.state.data, newSelectedPath, newValue)
    }

    onMck = () => {
        this.setState({
            data: [
                {
                    id: 87654325,
                    label: 'My file9',
                    parentId: 56789012,
                },
            ],
        })
        console.log(this.state.data)
    }

    onItemClick = (event, value) => {
        this.state.selected_id = value
        console.log(
            '🚀 ~ file: bottom-content.js ~ line 142 ~ BottomContent ~ onItemClick',
            value
        )

        if (value === this.state.selected_id) {
            let newSelectedPath = findPath(this.state.data, 'id', value)
            newSelectedPath =
                newSelectedPath === '' ? '' : newSelectedPath + '.text'

            const newCode = _.get(this.state.data, newSelectedPath)
            this.editor.setValue(newCode || '')
        }
    }

    render() {
        const renderTree = (nodes) => (
            <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
                {Array.isArray(nodes.children)
                    ? nodes.children.map((node) =>
                          node ? renderTree(node) : <></>
                      )
                    : null}
            </TreeItem>
        )

        return (
            <>
                {/* Button toolbar */}
                <Container fluid>
                    <Row style={{ justifyContent: 'right' }}>
                        <Button
                            variant="primary"
                            id="btn_node_add"
                            onClick={this.handleNodeAddClick}
                        >
                            Add Node
                        </Button>
                        <Button className="mr-2" variant="secondary">
                            Add Subnode
                        </Button>
                        <Button
                            variant="danger"
                            onClick={this.handleDeleteNodeClick}
                        >
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
                <div className="full-height mx-0 my-0 px-0 py-0">
                    <button onClick={this.onMck} />
                    <Row className="full-xy ">
                        <Col className="full-height" lg={2}>
                            <div id="mtree">
                                <TreeView
                                    className="asa"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpanded={['root']}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    onNodeSelect={this.onItemClick}
                                >
                                    {renderTree(this.state.data || {})}
                                </TreeView>
                            </div>
                        </Col>
                        <Col lg={10} className="full-height">
                            <p>{JSON.stringify(this.state.data)}</p>
                            <MonacoEditor
                                language="python"
                                // value={this.state.selected_code}
                                options={{
                                    theme: 'vs-dark',
                                }}
                                // value={this.state.selected_code}
                                onChange={this.onChange}
                                editorDidMount={this.editorDidMount}
                            />
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
export default BottomContent
