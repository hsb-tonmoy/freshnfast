<script>
	export let title = '';
	export let img_url = '';
	export let description = '';
</script>

<div class="card group max-w-xs lg:max-w-sm bg-white rounded-xl">
	<div
		class="relative rounded-xl h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
		style={`background-image: url(${img_url})`}
	>
		<span />
		<div
			class="absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 bg-black/50 transition-all ease-in-out duration-200"
		>
			<button
				class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-sm hover:text-white group hover:bg-gray-50"
			>
				<span
					class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
				/>
				<span
					class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"
				>
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/></svg
					>
				</span>
				<span class="relative">Button Text</span>
			</button>
		</div>
	</div>
	<div class="p-5">
		<a href="#">
			<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
		</a>
		<p class="mb-3 font-normal text-sm text-gray-700 ">
			{description}
		</p>
	</div>
</div>

<style>
	.card {
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
	}
</style>
