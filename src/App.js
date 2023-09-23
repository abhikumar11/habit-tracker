import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddTask from './components/AddTask';
import WeekTask from './components/WeekTask';


const App = () => {
    return (
        <div className="App">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    </Routes>
                    <Routes>
                    <Route path='/AddTask' exact element={<AddTask/>} />
                    </Routes>
                    <Routes>
                    <Route path='/WeekTask' exact element={<WeekTask/>} />
                    </Routes>
        </div>
    )
};

export default App;