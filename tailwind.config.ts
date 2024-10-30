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
			black: '#000000',
			successGreen: '#4BB543',
			warningYellow: '#ffcc00',
			errorRed: '#ff3333',

			light: {
				background: '#E4F2F7',
				primary: '#2B6777',
				accent: '#D9C5A5',
				secondaryAccent: '#8acfa6',
				textPrimary: '#1B3A4B',
				textSecondary: '#6A6A6A',
				bgSidenav: '#C5E2E9',
				linkAccent: '#A7C2C7',
			},
			dark: {
				background: '#121A22',
				primary: '#3BA99C',
				accent: '#1E3B52',
				secondaryAccent: '#A6825C',
				textPrimary: '#D4E4E8',
				textSecondary: '#d0d5d9',
				bgSidenav: '#18323B',
				linkAccent: '#2c8578',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
