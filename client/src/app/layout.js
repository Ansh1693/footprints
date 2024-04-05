import './styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import cn from 'mxcn'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn(inter.className, '')}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
