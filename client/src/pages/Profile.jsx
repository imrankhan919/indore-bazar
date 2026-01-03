import { User, Mail, Phone, MapPin, Package, Store, X, ChevronRight } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyOrders } from "../features/auth/authSlice"

export default function ProfilePage() {

    const { user } = useSelector(state => state.auth)


    const dispatch = useDispatch()




    const orders = [
        { id: "ORD-7732", date: "Oct 12, 2025", amount: "2,450", status: "Delivered" },
        { id: "ORD-8921", date: "Nov 05, 2025", amount: "1,200", status: "Pending" },
        { id: "ORD-9104", date: "Dec 18, 2025", amount: "850", status: "Delivered" },
    ]


    useEffect(() => {
        dispatch(getMyOrders())
    }, [])



    return (
        <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 font-sans text-slate-900">
            <div className="mx-auto max-w-5xl space-y-8">
                {/* 1️⃣ Page Header */}
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Profile</h1>
                        <p className="text-slate-500">Manage your account & orders</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white shadow-sm ring-4 ring-indigo-50">
                        {user.name[0]}
                    </div>
                </header>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                        {/* 2️⃣ Profile Details Card */}
                        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
                            <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4">
                                <h2 className="flex items-center gap-2 font-semibold text-slate-800">
                                    <User className="h-4 w-4 text-indigo-600" />
                                    Personal Information
                                </h2>
                            </div>
                            <div className="grid gap-6 p-6 md:grid-cols-2">
                                <div className="space-y-1">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Full Name</p>
                                    <p className="font-medium text-slate-700">{user.name}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Email Address</p>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Mail className="h-4 w-4 text-slate-400" />
                                        <span>{user.email}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Phone Number</p>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Phone className="h-4 w-4 text-slate-400" />
                                        <span>{user.phone}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Default Address</p>
                                    <div className="flex items-start gap-2 text-slate-700">
                                        <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
                                        <span className="leading-tight">{user.address}</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3️⃣ Order History Section */}
                        <section className="space-y-4">
                            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                                <Package className="h-5 w-5 text-indigo-600" />
                                My Orders
                            </h2>
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="border-b border-slate-100 bg-slate-50/50 text-slate-500">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold">Order ID</th>
                                                <th className="px-6 py-4 font-semibold">Date</th>
                                                <th className="px-6 py-4 font-semibold">Amount</th>
                                                <th className="px-6 py-4 font-semibold text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {orders.map((order) => (
                                                <tr key={order.id} className="group cursor-pointer transition-colors hover:bg-slate-50/50">
                                                    <td className="px-6 py-4 font-medium text-indigo-600">{order.id}</td>
                                                    <td className="px-6 py-4 text-slate-600">{order.date}</td>
                                                    <td className="px-6 py-4 font-semibold text-slate-800">₹{order.amount}</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <span
                                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${order.status === "Delivered"
                                                                ? "bg-emerald-100 text-emerald-700"
                                                                : "bg-amber-100 text-amber-700"
                                                                }`}
                                                        >
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-6">
                        {/* 4️⃣ Become a Shop Owner CTA */}
                        <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 shadow-sm ring-1 ring-indigo-100">
                            <div className="relative z-10 space-y-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-sm">
                                    <Store className="h-6 w-6 text-white" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-slate-900">Want to sell on Indore Bazar?</h3>
                                    <p className="text-sm leading-relaxed text-slate-600">
                                        Reach thousands of local customers by listing your products on our platform.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md active:scale-95"
                                    onClick={() => {
                                        const modal = document.getElementById("shop-owner-modal")
                                        if (modal) modal.style.display = "flex"
                                    }}
                                >
                                    Become a Shop Owner
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-600/5" />
                        </div>
                    </aside>
                </div>
            </div>

            {/* 5️⃣ Become Shop Owner Modal */}
            <div
                id="shop-owner-modal"
                className="fixed inset-0 z-50 hidden items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.4)" }}
            >
                <div className="relative w-full max-w-lg scale-95 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all animate-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                        <h2 className="text-xl font-bold text-slate-900">Apply for Shop Ownership</h2>
                        <button
                            type="button"
                            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                            onClick={() => {
                                const modal = document.getElementById("shop-owner-modal")
                                if (modal) modal.style.display = "none"
                            }}
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <form className="space-y-4 p-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label htmlFor="shop-name" className="text-sm font-semibold text-slate-700">
                                Shop Name
                            </label>
                            <input
                                id="shop-name"
                                type="text"
                                placeholder="e.g. Indore Sweets & Snacks"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="shop-desc" className="text-sm font-semibold text-slate-700">
                                Shop Description
                            </label>
                            <textarea
                                id="shop-desc"
                                rows={3}
                                placeholder="Tell us about your business..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="shop-addr" className="text-sm font-semibold text-slate-700">
                                Shop Address
                            </label>
                            <input
                                id="shop-addr"
                                type="text"
                                placeholder="Full physical address"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="shop-phone" className="text-sm font-semibold text-slate-700">
                                Shop Phone Number
                            </label>
                            <input
                                id="shop-phone"
                                type="tel"
                                placeholder="+91 00000 00000"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50"
                            />
                        </div>

                        <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                            <button
                                type="button"
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 active:scale-95"
                                onClick={() => {
                                    const modal = document.getElementById("shop-owner-modal")
                                    if (modal) modal.style.display = "none"
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="flex-[2] rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md active:scale-95"
                                onClick={() => {
                                    alert("Application Submitted!")
                                    const modal = document.getElementById("shop-owner-modal")
                                    if (modal) modal.style.display = "none"
                                }}
                            >
                                Request Approval
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
