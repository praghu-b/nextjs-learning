export const metadata = {
  title: "Authentication Layout"
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <footer style={{ backgroundColor: "lightgrey", padding: "50px 10px" }}>
          Footer
        </footer>
      </body>
    </html>
  )
}
