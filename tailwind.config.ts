import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			light: {
				background: '#E4F2F7',
				primary: '#2B6777',
				accent: '#D9C5A5',
				secondaryAccent: '#8acfa6',
				textPrimary: '#1B3A4B',
				textSecondary: '#6A6A6A',
				bgSidenav: '#C5E2E9',
			},
			dark: {
				background: '#121A22',
				primary: '#3BA99C',
				accent: '#1E3B52',
				secondaryAccent: '#A6825C',
				textPrimary: '#D4E4E8',
				textSecondary: '#d0d5d9',
				bgSidenav: '#18323B',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
