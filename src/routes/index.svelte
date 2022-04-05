<script>
	import Hero from '$lib/Layout/Homepage/Hero.svelte';
	import WhiteSectionTemplate from '$lib/Layout/Homepage/WhiteSectionTemplate.svelte';
	import BackgroundSectionTemplate from '$lib/Layout/Homepage/BackgroundSectionTemplate.svelte';
	import Bowls from '$lib/Layout/Homepage/Content/Bowls.svelte';
	import Discount from '$lib/Layout/Homepage/Content/Banner/Discount.svelte';
</script>

<main class="flex flex-col">
	<Hero />
	<WhiteSectionTemplate heading="Our Bowls">
		<Bowls />
	</WhiteSectionTemplate>
	<Discount />
	<div class="mt-40">
		<BackgroundSectionTemplate heading="Our Smoothies">
			<Bowls />
		</BackgroundSectionTemplate>
	</div>
</main>

<svelte:head>
	<title>Fresh N' Fast - Making Choices Healthier</title>
</svelte:head>
