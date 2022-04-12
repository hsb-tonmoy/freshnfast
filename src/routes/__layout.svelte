<script>
	import '../app.css';
	import SiteHeader from '$lib/Layout/Header/SiteHeader.svelte';
	import SiteFooter from '$lib/Layout/Footer/SiteFooter.svelte';
</script>

<SiteHeader />
<slot />
<SiteFooter />
