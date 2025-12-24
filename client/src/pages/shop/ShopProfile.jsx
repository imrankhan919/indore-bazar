import { MapPin, Clock, Phone, Mail, Globe, Store } from 'lucide-react';
import ShopOwnerLayout from '../../components/shop/ShopOwnerLayout';

function ShopProfile() {
    return (
        <ShopOwnerLayout activePage="Shop Profile">
            <div className="max-w-4xl">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Shop Information</h2>
                            <p className="text-sm text-slate-500 mt-1">Manage your shop details and settings</p>
                        </div>
                        <span className="inline-block px-4 py-2 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-lg">
                            Approved
                        </span>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Shop Name
                                </label>
                                <input
                                    type="text"
                                    value="Fresh Mart Downtown"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Category
                                </label>
                                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                                    <option>Grocery & Supermarket</option>
                                    <option>Organic Store</option>
                                    <option>Convenience Store</option>
                                    <option>Specialty Foods</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Address
                                </div>
                            </label>
                            <input
                                type="text"
                                value="123 Main Street, Downtown District"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-3"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <input
                                    type="text"
                                    placeholder="City"
                                    value="New York"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    value="NY"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="text"
                                    placeholder="ZIP Code"
                                    value="10001"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    <div className="flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Phone Number
                                    </div>
                                </label>
                                <input
                                    type="tel"
                                    value="+1 (555) 123-4567"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    <div className="flex items-center">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Email Address
                                    </div>
                                </label>
                                <input
                                    type="email"
                                    value="contact@freshmart.com"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                <div className="flex items-center">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Website
                                </div>
                            </label>
                            <input
                                type="url"
                                placeholder="https://yourwebsite.com"
                                value="https://freshmart.com"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Description
                            </label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Describe your shop..."
                            >Your one-stop shop for fresh, organic groceries delivered to your doorstep within 30 minutes. We pride ourselves on quality products and excellent customer service.</textarea>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Delivery Settings</h2>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Delivery Radius
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value="5"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-slate-500">
                                        km
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Minimum Order Amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-slate-500">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        value="15"
                                        className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Delivery Fee
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-slate-500">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        value="3.99"
                                        className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Estimated Delivery Time
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value="30-45"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-slate-500">
                                        mins
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2" />
                            Opening Hours
                        </div>
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Monday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="08:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="22:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Tuesday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="08:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="22:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Wednesday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="08:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="22:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Thursday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="08:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="22:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Friday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="08:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="23:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Saturday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="09:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="23:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center space-x-4">
                                <input type="checkbox" checked className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500" />
                                <span className="font-medium text-slate-900 w-24">Sunday</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="time"
                                    value="09:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="text-slate-500">to</span>
                                <input
                                    type="time"
                                    value="21:00"
                                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <button className="px-6 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                        Cancel
                    </button>
                    <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600">
                        Update Shop
                    </button>
                </div>
            </div>
        </ShopOwnerLayout>
    );
}

export default ShopProfile;
