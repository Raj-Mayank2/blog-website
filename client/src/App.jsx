import React from 'react';
import '../src/styles/App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import SignUp from './pages/SignUp'
import EditPost from './pages/EditPost';
import Login from './pages/Login'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/post/:id' element={<PostDetails/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App