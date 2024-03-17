<script lang='ts'>
  import '@fontsource-variable/inter'
  import '@fontsource-variable/plus-jakarta-sans'
  import '../global.css'
	import SmartCursor from '../components/SmartCursor/SmartCursor.svelte';
	import { onMount } from 'svelte';

  onMount(() => {
    // keyboard shortcut to toggle fullscreen
    window.addEventListener('keydown', (e) => {
      if (e.key === 'f') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      }
    });
  })
</script>

<div id='app'>
  <slot></slot>
  <SmartCursor />
  <!-- <div class='bg-black p-1 fixed bottom-0 left-0 w-full text-neutral-300 text-sm'>
    Under maintenance - Please excuse the mess
  </div> -->
</div>