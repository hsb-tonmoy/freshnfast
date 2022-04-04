<script>
	import { shopping_bag } from '$lib/svg/header';
</script>

<header class="fixed flex justify-between items-center w-full bg-transparent px-20 py-6">
	<div id="logo">
		<a href="/">
			<img class="w-52 h-52" src="/images/logo.png" alt="FreshNFast" />
		</a>
	</div>
	<nav class="flex items-center gap-x-2">
		<a class="menu-item" href="/">Home</a>
		<a class="menu-item" href="/">Menu</a>
		<a class="menu-item" href="/">About Us</a>
		<a class="menu-item" href="/">Contact Us</a>
	</nav>
	<div id="icons" class="flex items-center gap-x-2">
		<span class="menu-icons">{@html shopping_bag}</span>
	</div>
</header>

<style lang="postcss">
	.menu-item {
		@apply uppercase bg-white text-lightGreen px-2 py-1 text-sm;
	}

	.menu-icons {
		@apply w-6 h-6 text-lightGreen;
	}
</style>
