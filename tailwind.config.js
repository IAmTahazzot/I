/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['Plus Jakarta Sans Variable', 'sans-serif'],
				'body': ['Inter Variable', 'sans-serif'],

				// others
				'inter': ['Inter Variable', 'sans-serif'],
			}
		}
	},
	plugins: []
};