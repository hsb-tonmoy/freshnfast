<script>
	export let title = '';
	export let img_url = '';
	export let description = '';
</script>

<div class="card max-w-xs lg:max-w-sm bg-white rounded-xl">
	<div
		class="rounded-xl h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
		style={`background-image: url(${img_url})`}
	>
		<span />
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
