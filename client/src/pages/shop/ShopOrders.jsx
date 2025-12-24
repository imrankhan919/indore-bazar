import { Search, Filter, Eye } from 'lucide-react';
import ShopOwnerLayout from '../../components/shop/ShopOwnerLayout';

function ShopOrders() {
    return (
        <ShopOwnerLayout activePage="Orders">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
                        <Filter className="w-5 h-5 text-slate-600 mr-2" />
                        <span className="text-sm font-medium text-slate-700">Filter</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Order ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Customer Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Items Count</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Total Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Payment Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Order Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24857</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">Sarah Johnson</div>
                                        <div className="text-sm text-slate-500">sarah.j@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">5 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$127.50</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                                        Preparing
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24856</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">Mike Williams</div>
                                        <div className="text-sm text-slate-500">mike.w@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">3 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$89.20</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
                                        Out for Delivery
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24855</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">Emma Davis</div>
                                        <div className="text-sm text-slate-500">emma.d@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">7 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$56.80</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Delivered
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24854</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">James Brown</div>
                                        <div className="text-sm text-slate-500">james.b@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">12 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$203.45</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
                                        Placed
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24853</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">Lisa Anderson</div>
                                        <div className="text-sm text-slate-500">lisa.a@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">8 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$142.90</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Delivered
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24852</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">David Miller</div>
                                        <div className="text-sm text-slate-500">david.m@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">4 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$78.35</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
                                        Placed
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24851</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">Rachel Green</div>
                                        <div className="text-sm text-slate-500">rachel.g@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">6 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$95.60</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                                        Preparing
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">#ORD-24850</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-900">Tom Wilson</div>
                                        <div className="text-sm text-slate-500">tom.w@email.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">9 items</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-slate-900">$167.25</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                                        Delivered
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                                        <Eye className="w-5 h-5 text-slate-600" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                        Showing <span className="font-medium">1-8</span> of <span className="font-medium">1,429</span> orders
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

export default ShopOrders;
