import React, { useState, useEffect } from 'react'
import {Col, Container, Row} from "react-bootstrap";
import "./bottom-content.css"
import TextField from '@material-ui/core/TextField';
// import Tree from '@naisutech/react-tree'
// import TreeMenu, {ItemComponent} from 'react-simple-tree-menu';
// import '../../node_modules/react-simple-tree-menu/dist/main.css';
import cherry_red from '../icons/48px/cherry_red.png'
import cherry_purple from  '../icons/48px/cherry_purple.png'
import cherry_red_svg from '../icons/svgs/cherry_red.svg'

import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { Icon } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function MinusSquare(props) {
    return (
            <ArrowDropDownIcon/>
    );
}

function PlusSquare(props) {
    return (
        // <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        //     {/* tslint:disable-next-line: max-line-length */}
        //     <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        // </SvgIcon>
        <ArrowRightIcon/>
    );
}

function CloseSquare(props) {
    return (
        <SvgIcon className="close" fontSize="inherit" style={{ viewBox:"0 0 60 55"}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
        </SvgIcon>
    );
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
}))((props) => <TreeItem {...props} />);

const useStyles = makeStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
});




const myTheme = {
    'my-theme': {
        text: '#000000',
        bg: '#e2e2e2',
        highlight: '#aaaaaa', // the colours used for selected and hover items
        decal: 'black', // the colours used  for open folder indicators and icons
        accent: '#999' // the colour used for row borders and empty file indicators
    }
}

const iconStyle = {
    verticalAlign: 'text-bottom',
    height:"25px",
    width:"auto",
    padding:0
};

const openedIcon = <img src={cherry_red} alt="-" style={iconStyle}></img>;
const closedIcon = <img src={cherry_purple} alt="+" style={iconStyle}></img>;

let d = [
    {
        "id": 12345678,
        "parentId": null,
        "label": "My parent node",
        "items": [
            {
                "id": 87654321,
                "label": "My file",
                "parentId": 12345678
            }
        ]
    },
    {
        "id": 56789012,
        "parentId": 12345678,
        "label": "My child node",
        "items": [
            {
                "id": 87654321,
                "label": "My file2",
                "parentId": 56789012
            },
            {
                "id": 87654322,
                "label": "My file3",
                "parentId": 56789012
            }
        ]
    }
];

const treeData = {
    'first-level-node-1': {               // key
        label: 'Node 1 at the first level',
        index: 0, // decide the rendering order on the same level
        nodes: {
            'second-level-node-1': {
                label: 'Node 1 at the second level',
                index: 0,
                nodes: {
                    'third-level-node-1': {
                        label: 'Node 1 at the third level',
                        index: 0,
                        nodes: {} // you can remove the nodes property or leave it as an empty array
                    },
                },
            },
        },
    },
    'first-level-node-2': {
        label: 'Node 2 at the first level',
        index: 1,
    },
};


class BottomContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'data':[],
            'pid':0,
            'selected_id':0,
        }
    }

    componentDidMount() {
        this.setState({data:d});
        // if(this.props.state["node_add_clicked"] == true){

        // }
    }

    // () => {
    // const [pid, setParentid] = useState(0);
    // const [data, setData] = useState({});
    //
    // useEffect(() => {
    //     setData(d);
    // }, []);



    onChange = (event) => {
        console.log(event.target.value);
        var textLines = event.target.value.substr(0, event.target.value.selectionStart).split("\n");
        var currentLineNumber = textLines.length;
        // var currentColumnIndex = textLines[textLines.length-1].length;
        // console.log("Current Line Number "+ currentLineNumber+" Current Column Index "+currentColumnIndex );
        console.log(this.state.pid)

        };

    styledItemClick = (event) => {
        console.log(event.target);
    };

    onSelect = selectedNode => {
        console.log(selectedNode.parentId)
        var pid2 = selectedNode.parentId;
        this.state.pid = pid2;
    };

    // createTree = (tmpdata) => <Tree  nodes={tmpdata} onSelect={this.onSelect}   theme={'my-theme'} customTheme={myTheme} />


    onMck = () => {
        this.setState({data :[{
            "id": 87654325,
            "label": "My file9",
            "parentId": 56789012
        }]});
        console.log(this.state.data);
        // document.getElementById("mtree").innerHTML = createTree(data)
    };

    onItemClick = (event, value) => {
        // event.item.selected = !event.item.selected;
        // console.log(event)
        let parentid= d.filter(y => y.items.find(j => j.id === value))[0]
        if(parentid!== undefined){
            parentid = parentid.id
        }
        console.log("parent id is ", parentid)
        this.setState({
            ...this.state,
            selected_id:parentid
        })
        this.forceUpdate();
    }


render() {

    console.log("props should be below")
    console.log(this.props.state)
    console.log(this.state.selected_id)
    if (this.props.state !== undefined){
    if(this.props.state.node_add_clicked === true){
        // d.find(x => x.id === this.state.selected_id).items.concat({id: 87654327, label: "My file6", parentId: this.state.selected_id})
        // d= 
        // console.log(d)
        
        // let parentid= d.filter(y => y.items.find(j => j.id === this.state.selected_id))[0].id
        // console.log("parent id is ", parentid)
        d.find(x => x.id === this.state.selected_id).items = d.find(x => x.id === this.state.selected_id).items.concat({id: 87654327, label: "My file6", parentId: this.state.selected_id})
        this.setState({
            ...this.state,
            data: d}
            );
        this.props.state.node_add_clicked = false
        console.log(this.state)
    }
}

    return (
        <div className="full-height mx-0 my-0 px-0 py-0">
            <button onClick={this.onMck}/>
            <Row className="full-xy ">
                <Col className="full-height" lg={2}>
                    <div id="mtree">
                        {/*<Tree nodes={this.state.data} onSelect={this.onSelect} theme={'my-theme'} customTheme={myTheme}/>*/}
                        {/*<TreeMenu data={this.state.data}*/}
                        {/*          onClickItem={({ key, label}) => {*/}
                        {/*              alert(label);*/}
                        {/*          }}*/}
                        {/*/>*/}

                        {/*<TreeMenu data={this.state.data} onClickItem={(key, label) => alert(label)}>*/}
                        {/*    {({ items }) => (*/}
                        {/*        <ul className="tree-item-group">*/}
                        {/*            {items.map(({ key, ...props }) => (*/}
                        {/*                <ItemComponent*/}
                        {/*                    key={key}*/}
                        {/*                    {...props}*/}
                        {/*                    openedIcon={openedIcon}*/}
                        {/*                    closedIcon={closedIcon}*/}
                        {/*                />*/}
                        {/*            ))}*/}
                        {/*        </ul>*/}
                        {/*    )}*/}
                        {/*</TreeMenu>*/}


                        {/*<TreeView*/}
                        {/*    defaultExpanded={['1']}*/}
                        {/*    defaultCollapseIcon={<MinusSquare />}*/}
                        {/*    defaultExpandIcon={<PlusSquare />}*/}
                        {/*    defaultEndIcon={<CloseSquare />}*/}
                        {/*>*/}
                        {/*    <StyledTreeItem nodeId="1" label="Main" onClick={this.styledItemClick}>*/}
                        {/*        <StyledTreeItem nodeId="2" label="Hello" />*/}
                        {/*        <StyledTreeItem nodeId="3" label="Subtree with children">*/}
                        {/*            <StyledTreeItem nodeId="6" label="Hello" />*/}
                        {/*            <StyledTreeItem nodeId="7" label="Sub-subtree with children">*/}
                        {/*                <StyledTreeItem nodeId="9" label="Child 1" />*/}
                        {/*                <StyledTreeItem nodeId="10" label="Child 2" />*/}
                        {/*                <StyledTreeItem nodeId="11" label="Child 3" />*/}
                        {/*            </StyledTreeItem>*/}
                        {/*            <StyledTreeItem nodeId="8" label="Hello" />*/}
                        {/*        </StyledTreeItem>*/}
                        {/*        <StyledTreeItem nodeId="4" label="World" />*/}
                        {/*        <StyledTreeItem nodeId="5" label="Something something" />*/}
                        {/*    </StyledTreeItem>*/}
                        {/*</TreeView>*/}
                        <TreeView
                            defaultExpanded={['1']}
                            defaultCollapseIcon={<MinusSquare />}
                            defaultExpandIcon={<PlusSquare />}
                            defaultEndIcon={<CloseSquare />}
                            onNodeSelect={this.onItemClick}
                        >
                                {
                                    this.state.data.map(({ id, parentId, label, items }) => {
                                        return(
                                                (
                                                    <StyledTreeItem nodeId={id} label={label}>
                                                        {
                                                            items.map(
                                                                ({id, label, parentId}) => {
                                                                    console.log(label);
                                                                    return (<StyledTreeItem nodeId={id} label={label}/>);
                                                                }
                                                            )
                                                        }
                                                    </StyledTreeItem>
                                                )
                                        )

                                        })
                                }
                        </TreeView>
                    </div>

                </Col>
                <Col lg={10} className="full-height">
                    {/*<TextField fullWidth className="mtextfield col-lg-10" label="" variant="filled" multiline/>*/}
                    <p>{JSON.stringify(this.state.data)}</p>
                    <textarea onChange={this.onChange} className="full-xy"></textarea>
                </Col>
            </Row>

        </div>)
}
};
export default  BottomContent;
