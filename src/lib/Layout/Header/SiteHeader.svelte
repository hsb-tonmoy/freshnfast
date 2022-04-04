<script>
	import { shopping_bag } from '$lib/svg/header';
</script>

<header class="fixed flex justify-between items-center w-full bg-transparent px-20 z-[1000]">
	<div id="logo" class="animate__animated animate__rotateInDownLeft">
		<a href="/">
			<img class="w-52 h-52" src="/images/logo.png" alt="FreshNFast" />
		</a>
	</div>
	<nav class="animate__animated animate__slideInRight flex items-center gap-x-4">
		<a class="menu-item" href="/">Home</a>
		<a class="menu-item" href="/">Menu</a>
		<a class="menu-item" href="/">About Us</a>
		<a class="menu-item" href="/">Contact Us</a>
		<div id="icons" class="flex items-center ml-6">
			<span class="menu-icons">{@html shopping_bag}</span>
		</div>
	</nav>
</header>

<style lang="postcss">
	.menu-item {
		@apply uppercase bg-lightGreen hover:bg-darkGreen text-white px-6 py-4 font-medium text-base transition-all ease-in-out duration-200;
	}

	.menu-icons {
		@apply w-6 h-6 text-white;
	}
</style>
