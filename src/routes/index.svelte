<script>
	import Hero from '$lib/Layout/Homepage/Hero.svelte';
	import SectionTemplate from '$lib/Layout/Homepage/SectionTemplate.svelte';
	import Bowls from '$lib/Layout/Homepage/Content/Bowls.svelte';
</script>

<main class="flex flex-col">
	<Hero />
	<SectionTemplate heading="Our Bowls">
		<Bowls />
	</SectionTemplate>
</main>

<svelte:head>
	<title>Fresh N' Fast - Making Choices Healthier</title>
</svelte:head>
