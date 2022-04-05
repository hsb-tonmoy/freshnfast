<script>
	import { shopping_bag } from '$lib/svg/header';
	let y;

	let header_scrolling = false;

	$: if (y > 50) {
		header_scrolling = true;
	} else {
		header_scrolling = false;
	}

	$: menu_item_class = `uppercase bg-lightGreen hover:bg-darkGreen text-white font-medium ${
		header_scrolling ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-base'
	} transition-all ease-in-out duration-500`;
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`fixed flex justify-between items-center w-full px-20 z-[1000] ${
		header_scrolling ? 'bg-white shadow-lg' : 'bg-transparent'
	} `}
>
	<div id="logo" class="animate__animated animate__rotateInDownLeft">
		<a href="/">
			<img
				class={`transition-all ease-in-out duration-500 ${
					header_scrolling ? 'w-20 h-20' : 'w-52 h-52'
				}`}
				src="/images/logo.png"
				alt="FreshNFast"
			/>
		</a>
	</div>
	<nav class="animate__animated animate__slideInRight flex items-center gap-x-4">
		<a class={menu_item_class} href="/">Home</a>
		<a class={menu_item_class} href="/">Menu</a>
		<a class={menu_item_class} href="/">About Us</a>
		<a class={menu_item_class} href="/">Contact Us</a>
		<button
			class="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"
		>
			<div class="relative flex items-center justify-center">
				<span
					class={`block w-8 h-8 ${
						header_scrolling ? 'text-darkGreen stroke-1' : 'text-white'
					} hover:text-lightGreen transition-all ease-in-out duration-200`}
					>{@html shopping_bag}</span
				>
				<span
					class="absolute rounded-full bg-darkGreen w-5 h-5 -top-1 -right-1 text-white text-xs leading-tight text-center"
					>5
				</span>
			</div>
		</button>
	</nav>
</header>
