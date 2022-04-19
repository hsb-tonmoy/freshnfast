<script>
	import CartItems from './CartItems.svelte';
</script>

<section class="h-screen shadow-md bg-white z-[999999]">
	<CartItems />
</section>

<style>
	section {
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
		border-top-left-radius: 40% 80%;
		border-bottom-left-radius: 40% 80%;
	}
</style>
