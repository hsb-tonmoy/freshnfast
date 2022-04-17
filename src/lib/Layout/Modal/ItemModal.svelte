<script>
	export let hidden = true;
	export let item = {};
</script>

<div
	on:click|self={() => (hidden = !hidden)}
	class:hidden
	id="defaultModal"
	tabindex="-1"
	aria-hidden="true"
	class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10001] w-full md:inset-0 h-modal md:h-screen bg-white/90"
>
	<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
		<div
			class="relative rounded-xl h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
			style={`background-image: url(${item.img_url})`}
		>
			<span />
		</div>
	</div>
</div>
