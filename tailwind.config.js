/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		gradient: {
			main: 'linear-gradient(33deg, #f78fad, #fdeb82)',
		},
		color: {},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		extend: {
			boxShadow: {
				custom: '2px 2px 10px 0 rgba(0, 0, 0, 0.2)',
			},
			transition: {
				custom: 'all 0.2s ease',
			},
		},
	},
	plugins: [],
};
