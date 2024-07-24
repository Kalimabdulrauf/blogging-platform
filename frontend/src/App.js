import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/posts/:id" element={<Post />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
