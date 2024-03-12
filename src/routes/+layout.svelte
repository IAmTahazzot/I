<script lang='ts'>
  import '@fontsource-variable/inter'
  import '@fontsource-variable/plus-jakarta-sans'
  import '../global.css'
	import SmartCursor from '../components/SmartCursor/SmartCursor.svelte';
</script>

<div id='app'>
  <slot></slot>
  <SmartCursor />
</div>