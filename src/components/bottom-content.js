import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import "./bottom-content.css"
import TextField from '@material-ui/core/TextField';

const BottomContent = () => {
    return (
        <div className="full-height mx-0 my-0 px-0 py-0" >
            <Row className="full-xy " >
                <Col className="antiquewhite full-height" lg={2}>1 of 1</Col>
                <Col lg={10} className="full-height">
                    {/*<TextField fullWidth className="mtextfield col-lg-10" label="" variant="filled" multiline/>*/}
                    <textarea className="full-xy"></textarea>
                </Col>
            </Row>
        </div>)
};

export default  BottomContent;
