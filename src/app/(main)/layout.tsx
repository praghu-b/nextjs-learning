"use client";

import Link from "next/link";
import '../globals.css';
import { usePathname } from "next/navigation";

const NavLinks = [
  { page: 'Dashboard', href: '/dashboard' },
  { page: 'Profile', href: '/profile' },
  { page: 'Products', href: '/products' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-300 p-6 text-center">
          <nav>
            {NavLinks.map((link, index) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && pathname !== '/');
              return (
                <Link href={link.href} className={`mx-2 ${isActive ? 'font-bold' : null}`} key={index}>{link.page}</Link>
              )
            }
            )}
          </nav>
        </header>
        <main className="p-6">
          {children}
        </main>
        <footer className="bg-gray-300 p-6 font-bold text-center">
          Footer
        </footer>
      </body>
    </html>
  )
}
