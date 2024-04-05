'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import ToastNotification from '@/components/ui/ToastNotification'
import { ContextMenu } from '@/components/ui/ContextMenu'

export function Providers({ children }) {
	return (
		<Provider store={store}>
			<NextThemesProvider attribute='class' forcedTheme='light'>
				<ToastNotification />
				{children}
			</NextThemesProvider>
		</Provider>
	)
}

export default Providers
