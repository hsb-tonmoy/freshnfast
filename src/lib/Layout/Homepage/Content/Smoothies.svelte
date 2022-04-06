<script>
	import Card from './Cards/Card.svelte';

	const smoothies = [
		{
			title: 'Green Maschine',
			img_url: '/images/smoothie1.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Mango Tango',
			img_url: '/images/smoothie2.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Very Berry',
			img_url: '/images/smoothie3.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Energy Builder',
			img_url: '/images/smoothie4.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Lake Shake',
			img_url: '/images/smoothie5.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		}
	];
</script>

<div class="w-full flex flex-wrap justify-center gap-x-8 gap-y-8 lg:gap-y-0 px-4 lg:px-12">
	{#each smoothies as smoothie}
		<Card title={smoothie.title} img_url={smoothie.img_url} description={smoothie.description} />
	{/each}
</div>
