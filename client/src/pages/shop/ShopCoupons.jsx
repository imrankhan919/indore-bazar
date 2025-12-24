import { Plus, Search, Filter, Edit } from 'lucide-react';
import ShopOwnerLayout from '../../components/shop/ShopOwnerLayout';

function ShopCoupons() {
    return (
        <ShopOwnerLayout activePage="Coupons">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search coupons..."
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
                        <span className="text-sm font-medium">Create Coupon</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Coupon Code</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Discount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Min Order</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Expiry Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Uses</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="font-mono font-medium text-slate-900">FRESH20</div>
                                    <div className="text-sm text-slate-500">New customer offer</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">20% Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$50.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Dec 31, 2024</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">127 / 500</span>
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
                                    <div className="font-mono font-medium text-slate-900">SAVE15</div>
                                    <div className="text-sm text-slate-500">Weekend special</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">15% Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$30.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Dec 15, 2024</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">89 / 200</span>
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
                                    <div className="font-mono font-medium text-slate-900">FIRSTORDER</div>
                                    <div className="text-sm text-slate-500">First time buyers</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">$10 Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$40.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Jan 31, 2025</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">234 / 1000</span>
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
                                    <div className="font-mono font-medium text-slate-900">BULK25</div>
                                    <div className="text-sm text-slate-500">Bulk order discount</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">25% Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$100.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Nov 30, 2024</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">45 / 100</span>
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
                                    <div className="font-mono font-medium text-slate-900">FREESHIP</div>
                                    <div className="text-sm text-slate-500">Free delivery</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">$5 Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$25.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Dec 25, 2024</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">167 / 300</span>
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
                                    <div className="font-mono font-medium text-slate-900">SUMMER30</div>
                                    <div className="text-sm text-slate-500">Summer sale</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-slate-400">30% Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-400">$60.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-red-600">Aug 31, 2024</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-400">500 / 500</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                                        Expired
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
                                    <div className="font-mono font-medium text-slate-900">VIP10</div>
                                    <div className="text-sm text-slate-500">VIP members only</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">10% Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$20.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Mar 31, 2025</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">78 / Unlimited</span>
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
                                    <div className="font-mono font-medium text-slate-900">LOYAL50</div>
                                    <div className="text-sm text-slate-500">Loyalty reward</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-emerald-600">$50 Off</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">$200.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">Feb 28, 2025</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-700">12 / 50</span>
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
                        Showing <span className="font-medium">8</span> coupons
                    </div>
                </div>
            </div>
        </ShopOwnerLayout>
    );
}

export default ShopCoupons;
