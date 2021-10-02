import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './bottom-content.css'
import TextField from '@material-ui/core/TextField'
import cherry_red from '../icons/48px/cherry_red.png'
import cherry_purple from '../icons/48px/cherry_purple.png'
import cherry_red_svg from '../icons/svgs/cherry_red.svg'
import PropTypes from 'prop-types'
import SvgIcon from '@material-ui/core/SvgIcon'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import Collapse from '@material-ui/core/Collapse'
import { Icon } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MonacoEditor from '@uiw/react-monacoeditor'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

var _ = require('lodash')
function MinusSquare(props) {
    return <ArrowDropDownIcon />
}

function PlusSquare(props) {
    return (
        // <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        //     {/* tslint:disable-next-line: max-line-length */}
        //     <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        // </SvgIcon>
        <ArrowRightIcon />
    )
}

function CloseSquare(props) {
    return (
        <SvgIcon
            className="close"
            fontSize="inherit"
            style={{ viewBox: '0 0 60 55' }}
            {...props}
        >
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
        </SvgIcon>
    )
}
const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        marginLeft: 7,
        paddingLeft: 18,
        borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
}))((props) => <TreeItem {...props} />)

const useStyles = makeStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
})

const myTheme = {
    'my-theme': {
        text: '#000000',
        bg: '#e2e2e2',
        highlight: '#aaaaaa', // the colours used for selected and hover items
        decal: 'black', // the colours used  for open folder indicators and icons
        accent: '#999', // the colour used for row borders and empty file indicators
    },
}

const iconStyle = {
    verticalAlign: 'text-bottom',
    height: '25px',
    width: 'auto',
    padding: 0,
}

// const openedIcon = <img src={cherry_red} alt="-" style={iconStyle}></img>
// const closedIcon = <img src={cherry_purple} alt="+" style={iconStyle}></img>

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

class BottomContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: d,
            pid: 0,
            selected_id: '0',
            selected_code: '',
        }
    }

    componentDidMount() {
        this.setState({ data: d, selected_id: '0' })
    }
    editorDidMount = (editor) => {
        this.editor = editor
    }

    onChange = (newValue) => {
        const newSelectedPath =
            findPath(this.state.data, 'id', this.state.selected_id) === ''
                ? ''
                : findPath(this.state.data, 'id', this.state.selected_id) +
                  '.text'

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

        if (value === this.state.selected_id) {
            const newSelectedPath =
                findPath(this.state.data, 'id', value) === ''
                    ? ''
                    : findPath(this.state.data, 'id', value) + '.text'
            const newCode = _.get(this.state.data, newSelectedPath)
            this.editor.setValue(newCode || '')
        }
    }

    render() {
        const renderTree = (nodes) => (
            <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
                {Array.isArray(nodes.children)
                    ? nodes.children.map((node) => renderTree(node))
                    : null}
            </TreeItem>
        )

        return (
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
                                {renderTree(d)}
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
        )
    }
}
export default BottomContent
