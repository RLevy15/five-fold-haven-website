import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Five-Fold Haven - Faith-Based Short-Term Rentals',
  description: 'Affordable, faith-centered rental housing in Tacoma, WA for missionaries, pastors, and ministry workers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
