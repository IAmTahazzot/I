<script lang="ts">
	export let size: number;
	export let unit: 'px' | 'em' | 'rem' | 'vh' | 'in' = 'px';
</script>

<div
	data-info="--------------------------------------------------"
	style={`height: ${size}${unit};`}
></div>
