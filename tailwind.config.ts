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
			red: '#DC143C',
			successGreen: '#4BB543',
			warningYellow: '#ffcc00',
			errorRed: '#ff3333',

			light: {
				bgPrimary: '#FFFFFF',
				bgSecondary: '#FFFFFF',
				accentPrimary: '#6200EE',
				accentSecondary: '#03DAC6',
				textPrimary: '#212121',
				textSecondary: '#666666',
				border: '#BABABA',
			},
			dark: {
				bgPrimary: '#121212',
				bgSecondary: '#1E1E1E',
				accentPrimary: '#BB86FC',
				accentSecondary: '#00DAC5',
				textPrimary: '#E1E1E1',
				textSecondary: '#A3A3A3',
				border: '#000000',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
