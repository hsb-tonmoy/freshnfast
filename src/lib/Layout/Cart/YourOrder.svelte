<script>
	import { cart_items, cart_count } from '$lib/Cart/stores';
	import { shopping_bag } from '$lib/svg/header';
	import Item from './Item.svelte';

	$: total = $cart_items.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<section class="h-screen shadow-md bg-white px-16 py-20 z-[999999]">
	<div class="header flex justify-center gap-x-6 pb-20 border-b-2 border-dashed border-gray-300">
		<div
			class="cart-icon group cursor-pointer relative flex items-center justify-center rounded-xl w-14 h-16 border border-lightGreen/40 bg-lightGreen/30 hover:bg-lightGreen transition-all ease-in-out duration-300"
		>
			<span class="block w-8 h-8 text-lightGreen group-hover:text-white">{@html shopping_bag}</span>
			<span
				class="absolute rounded-full bg-darkGreen w-6 h-6 -top-[0.5rem] -right-[0.5rem] text-white text-xs leading-tight flex justify-center items-center"
				>{$cart_count}
			</span>
		</div>
		<div class="user flex gap-x-2 items-center">
			<div class="profile-pic w-14 h-16 bg-cover bg-center bg-no-repeat rounded-xl">
				<span class="opacity-0">Trent</span>
			</div>
			<div class="details flex flex-col gap-y-[2px]">
				<span class="font-playfair font-semibold text-xl">Trent Boult</span>
				<span class="text-xs text-neutral-500">College Graduate</span>
			</div>
		</div>
	</div>

	<div class="orders py-10 border-b-2 border-dashed border-gray-300">
		<span class="font-playfair text-3xl font-semibold">Your Orders</span>
		<hr class="h-[5px] w-[18%] bg-lightGreen mt-2 mb-12" />
		<div class="items flex flex-col gap-y-8 overflow-y-scroll">
			{#each $cart_items as item}
				<Item {item} />
			{/each}
		</div>
	</div>
	<div class="total flex justify-between items-center pt-14">
		<span class="font-playfair font-semibold text-xl">Total Amount:</span>
		<span class="text-lg">${total}</span>
	</div>
	<div class="checkout-button flex justify-center items-center pt-12">
		<button
			class="text-white text-base font-medium bg-lightGreen hover:bg-darkGreen px-6 py-4 rounded-xl transition-all ease-in-out duration-200"
			>Proceed to Checkout <svg
				class="inline h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg></button
		>
	</div>
</section>

<style>
	section {
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
		border-top-left-radius: 40% 80%;
		border-bottom-left-radius: 40% 80%;
	}
	.profile-pic {
		background-image: url('/images/trent.jpeg');
	}
</style>
