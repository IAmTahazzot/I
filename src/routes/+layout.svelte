<script lang='ts'>
  import '@fontsource-variable/inter'
  import '@fontsource-variable/plus-jakarta-sans'
  import '../global.css'
	import SmartCursor from '../components/SmartCursor/SmartCursor.svelte';
</script>

<div id='app'>
  <slot></slot>
  <SmartCursor />
  <!-- <div class='bg-black p-1 fixed bottom-0 left-0 w-full text-neutral-300 text-sm'>
    Under maintenance - Please excuse the mess
  </div> -->
</div>