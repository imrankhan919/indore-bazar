import React from 'react'

const ShopApprovalListGroup = ({ allShops }) => {

    const approvalList = allShops



    return (

        <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Pending Shop Approvals</h3>
            <div className="space-y-4">


                {
                    approvalList.map(shop => {
                        return (
                            <div key={shop._id} className="flex items-center justify-between pb-4 border-b border-slate-100">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">{shop.name}</p>
                                    <p className="text-xs text-slate-500">Owner: {shop.user.name}</p>
                                    <p className="text-xs text-slate-500 mt-1">{shop.address}</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button className="px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded hover:bg-emerald-700">
                                        Approve
                                    </button>
                                    <button className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded hover:bg-slate-300">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }





            </div>
        </div>
    )
}

export default ShopApprovalListGroup
