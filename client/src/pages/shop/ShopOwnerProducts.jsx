import { Plus, Search, Filter, Edit, MoreVertical, Package } from 'lucide-react';
import ShopOwnerLayout from '../../components/shop/ShopOwnerLayout';

function ShopOwnerProducts() {
    return (
        <ShopOwnerLayout activePage="Products">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
                        <Filter className="w-5 h-5 text-slate-600 mr-2" />
                        <span className="text-sm font-medium text-slate-700">Filter</span>
                    </button>

                    <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                        <Plus className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Add Product</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Image</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Price</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Stock</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Organic Bananas</div>
                                    <div className="text-sm text-slate-500">1 kg</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Fruits</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$4.99</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">145</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Fresh Milk</div>
                                    <div className="text-sm text-slate-500">1 liter</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Dairy</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$3.49</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">87</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Whole Wheat Bread</div>
                                    <div className="text-sm text-slate-500">500g</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Bakery</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$2.99</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">52</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Chicken Breast</div>
                                    <div className="text-sm text-slate-500">500g</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Meat</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$8.99</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-red-600 font-medium">12</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                                        Low Stock
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Greek Yogurt</div>
                                    <div className="text-sm text-slate-500">500g</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Dairy</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$4.49</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">63</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Red Apples</div>
                                    <div className="text-sm text-slate-500">1 kg</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Fruits</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$5.99</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">98</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Cheddar Cheese</div>
                                    <div className="text-sm text-slate-500">250g</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Dairy</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$6.99</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">0</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                                        Out of Stock
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">Brown Rice</div>
                                    <div className="text-sm text-slate-500">2 kg</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Grains</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$7.49</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">134</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Edit className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                        Showing <span className="font-medium">1-8</span> of <span className="font-medium">247</span> products
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                            Previous
                        </button>
                        <button className="px-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium">
                            1
                        </button>
                        <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                            2
                        </button>
                        <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                            3
                        </button>
                        <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </ShopOwnerLayout>
    );
}

export default ShopOwnerProducts;
