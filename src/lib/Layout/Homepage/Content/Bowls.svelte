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
		}
	];
</script>

<div class="w-full flex gap-x-8 px-12">
	{#each bowls as bowl}
		<Card title={bowl.title} img_url={bowl.img_url} description={bowl.description} />
	{/each}
</div>
