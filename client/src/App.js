import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout'
import { AddPost } from './pages/AddPost';
import { EditPost } from './pages/EditPost';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { PostDetail } from './pages/PostDetail';
import { Posts } from './pages/Posts';
import { Register } from './pages/Register';

export default function App() {
  return (
  <Layout>
    <Routes>
    <Route path='/' element={<Main />} />
                <Route path='posts' element={<Posts />} />
                <Route path=':id' element={<PostDetail />} />
                <Route path=':id/edit' element={<EditPost />} />
                <Route path='new' element={<AddPost />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />

    </Routes>
  </Layout>
  )
}
