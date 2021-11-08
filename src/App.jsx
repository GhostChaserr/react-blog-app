import logo from './logo.svg';
import 'antd/dist/antd.css'
import { useState } from 'react'
import './App.css';

import { createContext } from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Screens
import Home from './pages/Home'
import Post from './pages/Post'

// Header
import Header from './components/Header';

export const PostsContext = createContext([]);

// 1. Entry point
function App() {
  const [posts, setPosts] = useState([]);
  return (
    <PostsContext.Provider value={[posts, setPosts]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  );
}

export default App;
