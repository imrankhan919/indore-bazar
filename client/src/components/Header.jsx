import { Leaf } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Leaf className="w-8 h-8 text-emerald-500" />
                        <span className="text-xl font-bold text-gray-900">IndoreMart</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-gray-600 hover:text-emerald-600 transition-colors">Categories</a>
                        <a className="text-gray-600 hover:text-emerald-600 transition-colors">Shops</a>
                        <a className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <button className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Login</button>
                        <button className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-colors">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
