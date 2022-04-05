<script>
	export let title = '';
	export let img_url = '';
	export let description = '';
</script>

<div class="card max-w-sm bg-white rounded-xl">
	<a href="#">
		<img class="rounded-t-lg rounded-b-lg h-auto" src={img_url} alt={title} />
	</a>
	<div class="p-5 h-32">
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
