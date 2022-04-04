const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				lightGreen: '#47705D',
				darkGreen: '#33443C'
			},
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
