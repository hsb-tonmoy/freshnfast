<script>
	import CartHeader from '$lib/Layout/Cart/CartHeader.svelte';
	import YourOrder from '$lib/Layout/Cart/YourOrder.svelte';
</script>

<main class="flex">
	<div class="content-body w-3/4">
		<CartHeader />
	</div>
	<div class="sidebar w-1/4">
		<YourOrder />
	</div>
</main>
