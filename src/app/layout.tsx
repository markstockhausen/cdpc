import './globals.css'
import { inter } from '@styles/fonts'
import { Navbar } from '@components/navigation/Navbar'
import { Footer } from '@components/navigation/Footer'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Responsible, Sustainable, and Inclusive Digital Product Creation',
    description: '—',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
        <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    )
}
