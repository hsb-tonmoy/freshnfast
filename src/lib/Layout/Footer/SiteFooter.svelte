<script>
	import ColumnOne from './ColumnOne.svelte';
	import ColumnTwo from './ColumnTwo.svelte';
	import ColumnThree from './ColumnThree.svelte';
</script>

<footer class="w-full py-20 bg-[#F9F9FA]">
	<div class="max-w-5xl mx-auto flex items-center gap-x-20">
		<div class="w-[35%]">
			<ColumnOne />
		</div>
		<div class="w-[20%]">
			<ColumnTwo />
		</div>
		<div class="w-[20%]">
			<ColumnThree />
		</div>
	</div>
</footer>
