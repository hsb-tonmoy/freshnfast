const shots = [
	{
		title: 'Wake Me Up',
		img_url: '/images/shot1.jpg',
		description:
			'Romaine lettuce, shredded parmesan, tomatoes and roasted chicken tossed with our caesar dressing.'
	},
	{
		title: 'Immunity Shot',
		img_url: '/images/shot2.jpg',
		description:
			'Baby spinach, grilled shrimp, tangerine slices, carrots, cranberries, slivered almonds and crispy wontons tossed with our asian vinaigrette.'
	},
	{
		title: 'Detox Shot',
		img_url: '/images/shot3.jpg',
		description:
			'lemon oregano chicken, rice, tomatoes, cucumber, olives, feta cheese, red onion, fresh herbs, and finished with tzatziki sauce.'
	},
	{
		title: 'Hot Shot',
		img_url: '/images/shot4.jpg',
		description:
			'Chili-spiced sweet potatoes and roasted bell pepper and plenty of zing from fresh lime.'
	}
];

export function get() {
	return {
		ok: true,
		status: 200,
		body: JSON.stringify(shots)
	};
}
