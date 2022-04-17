const smoothies = [
	{
		title: 'Green Maschine',
		img_url: '/images/smoothie1.jpg',
		description:
			'Banana, frozen mango, spinach, spirulina powder, organic orange juice, avocado or almond butter and milk of choice.'
	},
	{
		title: 'Mango Tango',
		img_url: '/images/smoothie2.jpg',
		description:
			'Fresh mango, banana, plain yogurt, water, fresh lemon juice, organic orange juice and milk of choice.'
	},
	{
		title: 'Very Berry',
		img_url: '/images/smoothie3.jpg',
		description:
			'Strawberry, blueberry, blackberry, raspberry, vanilla greek yogurt, organic orange or mango juice, touch of lime, coconut milk and sweetener of choice.'
	},
	{
		title: 'Energy Builder',
		img_url: '/images/smoothie4.jpg',
		description:
			'Protein powder, banana, oats, peanut butter, strawberry, plain yogurt and milk of choice.'
	},
	{
		title: 'Lake Shake',
		img_url: '/images/smoothie5.jpg',
		description:
			'Kale, spinach, frozen fruits - mango, orange, pineapple, granny smith apple, hemp seeds, chia seeds, frozen berries and milk of choice.'
	}
];

export function get() {
	return {
		ok: true,
		status: 200,
		body: JSON.stringify(smoothies)
	};
}
