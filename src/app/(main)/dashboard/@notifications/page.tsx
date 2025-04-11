import Link from "next/link"

export default function Notifications() {
    return (
        <>
            <h1 className="mr-2">Notifications</h1>
            <Link href='/dashboard/archived' className="text-blue-700 hover:font-semibold">Archived</Link>
        </>
    )
}