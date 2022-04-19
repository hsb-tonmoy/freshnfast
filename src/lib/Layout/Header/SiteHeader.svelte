<script>
	import { goto } from '$app/navigation';
	import { cart_count } from '$lib/Cart/stores';
	import { shopping_bag } from '$lib/svg/header';

	let y;

	let header_scrolling = false;

	$: if (y > 50) {
		header_scrolling = true;
	} else {
		header_scrolling = false;
	}

	$: menu_item_class = `uppercase bg-lightGreen hover:bg-darkGreen text-white font-medium ${
		header_scrolling ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm lg:text-base'
	} transition-all ease-in-out duration-500`;
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`md:fixed absolute flex justify-between items-center w-full py-4 md:py-0 px-4 md:px-6 lg:px-20 z-[1000] ${
		header_scrolling ? 'bg-white shadow-lg' : 'bg-transparent'
	} `}
>
	<div id="logo" class="animate__animated animate__rotateInDownLeft">
		<a href="/">
			<img
				class={`transition-all ease-in-out duration-500 ${
					header_scrolling ? 'w-14 h-14 my-4' : 'w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 mt-8'
				}`}
				src="/images/logo.png"
				alt="FreshNFast"
			/>
		</a>
	</div>
	<nav class="animate__animated animate__slideInRight hidden md:flex items-center gap-x-4">
		<a class={menu_item_class} href="/">Home</a>
		<a class={menu_item_class} href="/menu">Menu</a>
		<a class={menu_item_class} href="/about">About Us</a>
		<a class={menu_item_class} href="/contact">Contact Us</a>
		<button
			class="block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"
		>
			<div on:click={() => goto('/order/cart')} class="relative flex items-center justify-center">
				<span
					class={`block w-8 h-8 ${
						header_scrolling ? 'text-darkGreen stroke-1' : 'text-white'
					} hover:text-lightGreen transition-all ease-in-out duration-200`}
					>{@html shopping_bag}</span
				>
				<span
					class="absolute rounded-full bg-darkGreen w-5 h-5 -top-1 -right-1 text-white text-xs leading-tight text-center"
					>{$cart_count}
				</span>
			</div>
		</button>
	</nav>
</header>
