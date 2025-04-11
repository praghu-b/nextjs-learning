export default function DashboardLayout(
    {
        children,
        metrics,
        notifications,
        revenue,
    }: {
        children: React.ReactNode
        metrics: React.ReactNode
        notifications: React.ReactNode
        revenue: React.ReactNode
    }
) {
    return (
        <>
            {children}
            <div className="flex p-5 gap-5">
                <div className="flex-1 flex flex-col space-y-5 min-h-[50vh]">
                    <div className="flex-1 border border-gray-200 flex justify-center items-center shadow-lg shadow-gray-100">{metrics}</div>
                    <div className="flex-1 border border-gray-200 flex justify-center items-center shadow-lg shadow-gray-100">{notifications}</div>
                </div>
                <div className="flex-1 border border-gray-200 flex justify-center items-center shadow-lg shadow-gray-100">{revenue}</div>
            </div>
        </>
    )
}