import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminAllUsers from './pages/admin/AdminAllUsers'
import AdminAllOrders from './pages/admin/AdminAllOrders'
import AdminAllShops from './pages/admin/AdminAllShops'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminAllUsers />} />
        <Route path="/admin/orders" element={<AdminAllOrders />} />
        <Route path="/admin/shops" element={<AdminAllShops />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
