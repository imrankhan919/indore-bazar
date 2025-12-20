import { Leaf } from 'lucide-react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice'

const Header = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()


    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/")
    }



    return (
        <header className={location.pathname.includes("/admin") ? "hidden" : "sticky top-0 z-50 bg-white border-b border-gray-200"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Leaf className="w-8 h-8 text-emerald-500" />
                        <span className="text-xl font-bold text-gray-900">IndoreMart</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-gray-600 hover:text-emerald-600 transition-colors">Products</a>
                        <a className="text-gray-600 hover:text-emerald-600 transition-colors">Shops</a>
                        <a className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        {
                            user ? (<>
                                <Link to={"/admin/dashboard"} className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors mx-4">Welcome {user?.name}</Link>

                                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">Logout</button></>) : (
                                <>
                                    <Link to={"/login"} className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Login</Link>
                                    <Link to={"/register"} className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-colors">Sign Up</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
