
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./button-toolbar.css";
// import SvgCtTreeNodeAdd from "./iconsvgs/SvgCtTreeNodeAdd";
import ct_tree_node_add from '../icons/48px/ct_tree-node-add.png'
import ct_tree_subnode_add from '../icons/48px/ct_tree-subnode-add.png'
import ct_go_back from '../icons/48px/ct_go-back.png'
import ct_go_forward from '../icons/48px/ct_go-forward.png'
import ct_directory from '../icons/48px/ct_directory.png'
import ct_new_instance from '../icons/48px/ct_new-instance.png'
import ct_new_pdf from '../icons/48px/ct_to_pdf.png'
import ct_find_all from '../icons/48px/ct_find_all.png'
import ct_list_buleted from '../icons/48px/ct_list_bulleted.png'
import ct_list_numbered from '../icons/48px/ct_list_numbered.png'
import ct_list_todo from '../icons/48px/ct_list_todo.png'
import ct_fmt_indent from '../icons/48px/ct_fmt-indent.png'
import  ct_fmt_unindent from '../icons/48px/ct_fmt-unindent.png'
import ct_image_insert from '../icons/48px/ct_image_insert.png'
import ct_table_insert from '../icons/48px/ct_table_insert.png'
import ct_codebox_insert from '../icons/48px/ct_codebox_insert.png'
import ct_file_icon from '../icons/48px/ct_file_icon.png'
import ct_link_handle from '../icons/48px/ct_link_handle.png'
import ct_anchor_insert from '../icons/48px/ct_anchor_insert.png'
import ct_fmt_text_clear from '../icons/48px/ct_fmt-txt-clear.png'
import ct_color_bg from '../icons/48px/ct_color_bg.png'
import ct_color_fg from '../icons/48px/ct_color_fg.png'
import ct_fmt_bold from '../icons/48px/ct_fmt-txt-bold.png'
import ct_fmt_italic from '../icons/48px/ct_fmt-txt-italic.png'
import ct_fmt_underline from '../icons/48px/ct_fmt-txt-underline.png'
import ct_fmt_strikethrough from '../icons/48px/ct_fmt-txt-strikethrough.png'
import ct_fmt_text_large from '../icons/48px/ct_fmt-txt-large.png'
import ct_fmt_text_large2 from '../icons/48px/ct_fmt-txt-large2.png'
import ct_fmt_text_large3 from '../icons/48px/ct_fmt-txt-large3.png'
import ct_fmt_text_small from '../icons/48px/ct_fmt-txt-small.png'
import ct_fmt_text_subscript from '../icons/48px/ct_fmt-txt-subscript.png'
import ct_fmt_text_monospace from '../icons/48px/ct_fmt-txt-monospace.png'

//
// function importAll(r) {
//     return r.keys().map(r);
// }
// const images = importAll(require.context('../icons/48px/', false, /\.(png|jpe?g|svg)$/));

const  ButtonToolbar = () => {
    // const menuList = ["File", "Edit", "Formatting", "Tree", "Search", "View", "Bookmarks", "Import", "Export", "Help"]
    return(
        <div className="py-1 px-1 btn-toolbar-div">
            <img src={ct_tree_node_add} className="btn btn-light ml-1"/>
            <img src={ct_tree_subnode_add} className="btn btn-light ml-1"/>
            <img src={ct_go_back} className="btn btn-light ml-1"/>
            <img src={ct_go_forward} className="btn btn-light ml-1"/>
            <img src={ct_directory} className="btn btn-light ml-1"/>
            <img src={ct_new_instance} className="btn btn-light ml-1"/>
            <img src={ct_new_pdf} className="btn btn-light ml-1"/>
            <img src={ct_find_all} className="btn btn-light ml-1"/>
            <img src={ct_list_buleted} className="btn btn-light ml-1"/>
            <img src={ct_list_numbered} className="btn btn-light ml-1"/>
            <img src={ct_list_todo} className="btn btn-light ml-1"/>
            <img src={ct_fmt_indent} className="btn btn-light ml-1"/>
            <img src={ct_fmt_unindent} className="btn btn-light ml-1"/>
            <img src={ct_image_insert} className="btn btn-light ml-1"/>
            <img src={ct_table_insert} className="btn btn-light ml-1"/>
            <img src={ct_codebox_insert} className="btn btn-light ml-1"/>
            <img src={ct_file_icon} className="btn btn-light ml-1"/>
            <img src={ct_link_handle} className="btn btn-light ml-1"/>
            <img src={ct_anchor_insert} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_clear} className="btn btn-light ml-1"/>
            <img src={ct_color_bg} className="btn btn-light ml-1"/>
            <img src={ct_color_fg} className="btn btn-light ml-1"/>
            <img src={ct_fmt_bold} className="btn btn-light ml-1"/>
            <img src={ct_fmt_italic} className="btn btn-light ml-1"/>
            <img src={ct_fmt_underline} className="btn btn-light ml-1"/>
            <img src={ct_fmt_strikethrough} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_large} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_large2} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_large3} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_small} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_subscript} className="btn btn-light ml-1"/>
            <img src={ct_fmt_text_monospace} className="btn btn-light ml-1"/>
        </div>
    )
};

export default ButtonToolbar;