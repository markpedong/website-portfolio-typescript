import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.scss'
import ReduxProvider from '@/redux/provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Mark Pedong',
	description: 'Personal Website'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>{children}</ReduxProvider>
				<Toaster />
			</body>
		</html>
	)
}
