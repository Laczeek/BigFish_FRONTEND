'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import store from '@/store/store';
import ModalsContainer from '@/components/modals/ModalsContainer';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<Provider store={store}>
				<ModalsContainer />
				{children}
			</Provider>
		</ThemeProvider>
	);
}
