import Link from "next/link"

export default function ArchivedNotifications() {
    return (
        <>
            <h1 className="mr-2">Archived Notifications</h1>
            <Link href='/dashboard' className="text-blue-700 hover:font-semibold">Default</Link>
        </>
    )
}