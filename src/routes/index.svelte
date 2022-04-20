<script context="module">
	export async function load({ fetch }) {
		const res1 = await fetch('/bowls.json');
		const res2 = await fetch('/smoothies.json');
		const res3 = await fetch('/shots.json');
		const bowls = await res1.json();
		const smoothies = await res2.json();
		const shots = await res3.json();

		return { props: { bowls, smoothies, shots } };
	}
</script>

<script>
	import Hero from '$lib/Layout/Homepage/Hero.svelte';
	import WhiteSectionTemplate from '$lib/Layout/Homepage/WhiteSectionTemplate.svelte';
	import BackgroundSectionTemplate from '$lib/Layout/Homepage/BackgroundSectionTemplate.svelte';
	import Bowls from '$lib/Layout/Homepage/Content/Bowls.svelte';
	import Discount from '$lib/Layout/Homepage/Content/Banner/Discount.svelte';
	import Smoothies from '$lib/Layout/Homepage/Content/Smoothies.svelte';
	import Shots from '$lib/Layout/Homepage/Content/Shots.svelte';
	import Maps from '$lib/Layout/Homepage/Maps.svelte';

	export let bowls;
	export let smoothies;
	export let shots;
</script>

<svelte:head>
	<title>Fresh N' Fast - Making Choices Healthier</title>
</svelte:head>

<main class="flex flex-col">
	<Hero />
	<WhiteSectionTemplate anchor="menu" heading="Our Bowls">
		<Bowls {bowls} />
	</WhiteSectionTemplate>
	<Discount />
	<div class="mt-40">
		<BackgroundSectionTemplate heading="Our Smoothies">
			<Smoothies {smoothies} />
		</BackgroundSectionTemplate>
	</div>
	<div class="">
		<WhiteSectionTemplate heading="Elixir Shots">
			<Shots {shots} />
		</WhiteSectionTemplate>
	</div>
	<div class="">
		<WhiteSectionTemplate>
			<Maps />
		</WhiteSectionTemplate>
	</div>
</main>
