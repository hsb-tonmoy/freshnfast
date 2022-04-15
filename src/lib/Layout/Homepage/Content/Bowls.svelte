<script>
	import Card from './Cards/Card.svelte';

	const bowls = [
		{
			title: 'Bronco Bowl',
			img_url: '/images/bowl1.jpg',
			description:
				'Romaine lettuce, shredded parmesan, tomatoes and roasted chicken tossed with our caesar dressing.'
		},
		{
			title: 'Light and Lean',
			img_url: '/images/bowl2.jpg',
			description:
				'Baby spinach, grilled shrimp, tangerine slices, carrots, cranberries, slivered almonds and crispy wontons tossed with our asian vinaigrette.'
		},
		{
			title: 'Greek Freak',
			img_url: '/images/bowl3.jpg',
			description:
				'lemon oregano chicken, rice, tomatoes, cucumber, olives, feta cheese, red onion, fresh herbs, and finished with tzatziki sauce.'
		},
		{
			title: 'Kale Yeah',
			img_url: '/images/bowl4.jpg',
			description:
				'Chili-spiced sweet potatoes and roasted bell pepper and plenty of zing from fresh lime.'
		}
	];
</script>

<div class="w-full flex flex-wrap justify-center gap-x-8 gap-y-8 lg:gap-y-0 px-4 lg:px-12">
	{#each bowls as bowl}
		<Card title={bowl.title} img_url={bowl.img_url} description={bowl.description} />
	{/each}
</div>
