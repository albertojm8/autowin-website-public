import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Autowin',
  description: 'Vende tu auto al mejor postor!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-body text-body font-body">
        <div>{children}</div>
      </body>
    </html>
  )
}
