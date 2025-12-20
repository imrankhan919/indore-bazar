import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import AdminDashboard from './pages/admin/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
