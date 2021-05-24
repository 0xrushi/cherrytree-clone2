import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import TopTaskbar from "./components/top-taskbar";
import ButtonToolbar from "./components/button-toolbar";
import BottomContent from "./components/bottom-content";
import React from "react";


function App() {
  return (
    <BrowserRouter>
        <div>
        <TopTaskbar/>
        <ButtonToolbar/>
        </div>

    </BrowserRouter>
  );
}

export default App;
