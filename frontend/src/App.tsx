import './App.css';
import Welcome from './pages/Welcome';
import SideBar from './components/SideBar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import Content from './components/Content';
import React from 'react';

function App() {
    return (
        <div className='flex'>
            <SideBar/>
            <Content/>
        </div>
    )
}

export default App
