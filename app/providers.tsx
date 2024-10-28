'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import store from '@/store/store';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<Provider store={store}>{children}</Provider>
		</ThemeProvider>
	);
}
