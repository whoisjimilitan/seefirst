import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SeeFirst — Before you pay, you see the real item',
  description: 'Safe remote commerce. See the item. Seal it. Ship it. Confirm receipt.',
  openGraph: {
    title: 'SeeFirst',
    description: 'Safe remote commerce between Kumasi and Accra',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-secondary font-sans text-neutral antialiased">
        <header className="sticky top-0 z-50 bg-white border-b border-light">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="w-32 h-auto">
              <svg viewBox="0 0 200 50" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="35" fontSize="32" fontWeight="700" fontFamily="Georgia, serif" fill="#2D7F5E">
                  SeeFirst
                </text>
              </svg>
            </div>
            <div className="space-x-6 hidden sm:flex">
              <a href="#how" className="text-sm hover:text-primary transition">How it works</a>
              <a href="/sellers" className="text-sm hover:text-primary transition">For sellers</a>
              <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}