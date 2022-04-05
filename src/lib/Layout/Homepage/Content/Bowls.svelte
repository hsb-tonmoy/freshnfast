<script>
	import Card from './Cards/Card.svelte';

	const bowls = [
		{
			title: 'Bronco Bowl',
			img_url: '/images/bowl1.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Light and Lean',
			img_url: '/images/bowl2.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Greek Freak',
			img_url: '/images/bowl3.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		},
		{
			title: 'Kale Yeah',
			img_url: '/images/bowl4.jpg',
			description: 'Lettuce, tomato, and cucumber with a side of roasted red peppers.'
		}
	];
</script>

<div class="w-full flex justify-center gap-x-8 px-12">
	{#each bowls as bowl}
		<Card title={bowl.title} img_url={bowl.img_url} description={bowl.description} />
	{/each}
</div>
